import {WallPost} from '../interfaces/WallPost';
import {RepositoryComposite} from '../service/RepositoryComposite';
import {Subscriber} from './Subscriber';

export class FeedStore {
  private readonly repository: RepositoryComposite;
  private readonly notify: Subscriber;
  private posts: WallPost[];

  constructor(provider: RepositoryComposite, notify: Subscriber) {
    this.repository = provider;
    this.notify = notify;
    this.posts = [];
  }

  public load() {
    this.repository.getAllPosts()
        .then((posts) => {
          this.posts = posts;
          this.notify(this.posts);
        })
  }

  public comment(post: WallPost, comment: string) {
    this.repository.commentPost(post, comment).then((modifiedPost) => {
      console.log('commented post', modifiedPost);
      this.updatePostData(modifiedPost);
      this.notify(this.posts)
    })
  }

  public like(post: WallPost) {
    this.repository.likePost(post).then((modifiedPost) => {
      console.log('liked post', modifiedPost);
      this.updatePostData(modifiedPost);
      this.notify(this.posts)
    })
  }

  public repost(post: WallPost) {
    this.repository.repostPost(post).then((modifiedPost) => {
      console.log('reposted post', modifiedPost);
      this.updatePostData(modifiedPost);
      this.notify(this.posts)
    })
  }

  private updatePostData(modifiedPost: WallPost) {
    this.posts.forEach((post, index) => {
      if (modifiedPost.provider === post.provider && modifiedPost.id === post.id) {
        console.log('found');
        this.posts[index] = modifiedPost
      }
    })
  }
}
