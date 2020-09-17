import {RepostableSocialMediaRepository} from '../interfaces/RepostableSocialMediaRepository';
import {WallPost} from '../interfaces/WallPost';
import {request, Response} from '../external/transport';
import {SocialMediaProvider} from '../types/SocialMediaProvider';
import {PostComment} from '../interfaces/PostComment';

export class FacebookRepository implements RepostableSocialMediaRepository {
  public provider: SocialMediaProvider = 'facebook';
  private readonly facebookUrl: string = '/api/facebook';

  public commentPost(post: WallPost, comment: PostComment): Promise<WallPost> {
    return request({
      url: this.facebookUrl + '/comment',
      method: 'post',
      data: {
        post: post,
        comment: {
          text: comment.text,
          date: comment.date.toUTCString(),
          author: comment.author
        }
      }
    }).then(this.formatPostFromResponseData.bind(this))
  }

  public getAllPosts(): Promise<WallPost[]> {
    return request({
      url:  this.facebookUrl + '/get-all',
      method: 'get',
    })
      .then((response: Response<any[]>) => {
        const data = response.data;
        const posts = data.map((item: any): WallPost => {
          return this.formatPost(item);
        });

        return posts;
      })
  }

  public likePost(post: WallPost): Promise<WallPost> {
    return request({
      url:  this.facebookUrl + '/like',
      method: 'post',
      data: {
        post: post
      }
    }).then(this.formatPostFromResponseData.bind(this))
  }

  public repostPost(post: WallPost): Promise<WallPost> {
    return request({
      url:  this.facebookUrl + '/repost',
      method: 'post',
      data: {
        post: post
      }
    }).then(this.formatPostFromResponseData.bind(this))
  }

  private formatPostFromResponseData(response: Response<any[]>): WallPost {
    return this.formatPost(response.data);
  }

  private formatPost(item: any): WallPost {
    return {
      provider: this.provider,
      repostsAmount: item.repostsAmount,
      likesAmount: item.likesAmount,
      author: item.author,
      text: item.text,
      date: new Date(item.date),
      comments: item.comments.map((comment: any) => {
        return {
          text: comment.text,
          date: new Date(comment.date),
          author: {
            name: comment.author.name,
            avatar: comment.author.avatar
          }
        }
      }),
      id: item.id,
      image: item.image
    }
  }
}
