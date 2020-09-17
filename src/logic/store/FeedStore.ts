import {WallPost} from '../interfaces/WallPost';
import {RepositoryComposite} from '../interfaces/RepositoryComposite';
import {SocialMediaProvider} from '../types/SocialMediaProvider';
import {BaseStore} from './BaseStore';
import {PostComment} from '../interfaces/PostComment';

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

  public comment = (post: WallPost, comment: PostComment) => {
    this.provider.commentPost(post, comment).then((modifiedPost) => {
      console.info('commented post', modifiedPost);
      this.updatePostDataAndNotify(modifiedPost);
    })
  }

  public like = (post: WallPost) => {
    this.provider.likePost(post).then((modifiedPost) => {
      console.info('liked post', modifiedPost);
      this.updatePostDataAndNotify(modifiedPost);
    })
  }

  public repost = (post: WallPost) => {
    this.provider.repostPost(post).then((modifiedPost) => {
      console.info('reposted post', modifiedPost);
      this.updatePostDataAndNotify(modifiedPost);
    })
  }

  public filter = (enabledProviders: SocialMediaProvider[]) => {
    this.provider.filterPosts(enabledProviders);
  }

  public getFilters = (): SocialMediaProvider[] => {
    return this.provider.getFilters();
  }

  private updatePostDataAndNotify(modifiedPost: WallPost) {
    this.updatePostData(modifiedPost);
    this.notifySubscribers(this.posts);
  }

  private updatePostData(modifiedPost: WallPost) {
    this.posts.forEach((post, index) => {
      if (modifiedPost.provider === post.provider && modifiedPost.id === post.id) {
        this.posts[index] = modifiedPost
      }
    })
  }
}
