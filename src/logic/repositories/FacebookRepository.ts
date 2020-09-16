import {RepostableSocialMediaRepository} from '../interfaces/RepostableSocialMediaRepository';
import {WallPost} from '../interfaces/WallPost';
import {request, Response} from '../external/transport';
import {SocialMediaProvider} from '../types/SocialMediaProvider';

export class FacebookRepository implements RepostableSocialMediaRepository {
  provider: SocialMediaProvider = 'facebook';
  public commentPost(post: WallPost, comment: string): Promise<WallPost> {
    return request({
      url: '/api/facebook/comment',
      method: 'post',
      data: {
        post: post,
        text: comment
      }
    }).then((response: Response<any>) => {
      const item = response.data;

      return this.formatPost(item);
    })
  }

  public getAllPosts(): Promise<WallPost[]> {
    return request({
      url: '/api/facebook/get-all',
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
      url: '/api/facebook/like',
      method: 'post',
      data: {
        post: post
      }
    }).then((response: Response<any>) => {
      const item = response.data;

      return this.formatPost(item);
    })
  }

  public repostPost(post: WallPost): Promise<WallPost> {
    return request({
      url: '/api/facebook/repost',
      method: 'post',
      data: {
        post: post
      }
    }).then((response: Response<any>) => {
      const item = response.data;

      return this.formatPost(item);
    })
  }

  private formatPost(item: any): WallPost {
    return {
      provider: 'facebook',
      repostsAmount: item.repostsAmount,
      likesAmount: item.likesAmount,
      author: item.author,
      text: item.text,
      date: new Date(item.date),
      comments: item.comments,
      id: item.id,
      image: item.image
    }
  }
}
