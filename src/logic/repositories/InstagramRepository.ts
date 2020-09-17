import {BaseSocialMediaRepository} from '../interfaces/BaseSocialMediaRepository';
import {WallPost} from '../interfaces/WallPost';
import {SocialMediaProvider} from '../types/SocialMediaProvider';
import {PostComment} from '../interfaces/PostComment';
import {request, Response} from '../external/transport';

export class InstagramRepository implements BaseSocialMediaRepository {
  public provider: SocialMediaProvider = 'instagram';
  private readonly instagramUrl: string = '/api/instagram';

  public commentPost(post: WallPost, comment: PostComment): Promise<WallPost> {
    return request({
      url: this.instagramUrl + '/post/comment',
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
      url:  this.instagramUrl + '/post/all',
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
      url:  this.instagramUrl + '/post/like',
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
      likesAmount: item.likes,
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
