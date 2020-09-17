import {WallPost} from '../interfaces/WallPost';
import {RepositoryComposite} from '../service/RepositoryComposite';
import {SocialMediaProvider} from '../types/SocialMediaProvider';
import {BaseStore} from './BaseStore';

export class FeedStore extends BaseStore<WallPost[]>{
  private readonly provider: RepositoryComposite;
  private posts: WallPost[];

  constructor(provider: RepositoryComposite) {
    super();
    this.provider = provider;
    this.posts = [];
  }

  public getAll = (): WallPost[] => {
    return this.posts;
  }

  public load = () => {
    this.provider.getAllPosts()
        .then((posts) => {
          this.posts = posts;
          this.notifySubscribers(this.posts);
        })
  }

  public comment = (post: WallPost, comment: string) => {
    this.provider.commentPost(post, comment).then((modifiedPost) => {
      console.log('commented post', modifiedPost);
      this.updatePostData(modifiedPost);
      this.notifySubscribers(this.posts)
    })
  }

  public like = (post: WallPost) => {
    this.provider.likePost(post).then((modifiedPost) => {
      console.log('liked post', modifiedPost);
      this.updatePostData(modifiedPost);
      this.notifySubscribers(this.posts)
    })
  }

  public repost = (post: WallPost) => {
    this.provider.repostPost(post).then((modifiedPost) => {
      console.log('reposted post', modifiedPost);
      this.updatePostData(modifiedPost);
      this.notifySubscribers(this.posts)
    })
  }

  public filter = (enabledProviders: SocialMediaProvider[]) => {
    this.provider.filterPosts(enabledProviders);
  }

  public getFilters = (): SocialMediaProvider[] => {
    return this.provider.getFilters();
  }

  private updatePostData(modifiedPost: WallPost) {
    this.posts.forEach((post, index) => {
      if (modifiedPost.provider === post.provider && modifiedPost.id === post.id) {
        this.posts[index] = modifiedPost
      }
    })
  }
}
