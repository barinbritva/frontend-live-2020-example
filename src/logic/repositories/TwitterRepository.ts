import {RepostableSocialMediaRepository} from '../interfaces/RepostableSocialMediaRepository';
import {WallPost} from '../interfaces/WallPost';
import {SocialMediaProvider} from '../types/SocialMediaProvider';

export class TwitterRepository implements RepostableSocialMediaRepository {
  provider: SocialMediaProvider = 'twitter';
  commentPost(post: WallPost, comment: string): Promise<WallPost> {
    console.log(comment);
    return Promise.resolve(post);
  }

  getAllPosts(): Promise<WallPost[]> {
    return Promise.resolve([]);
  }

  likePost(post: WallPost): Promise<WallPost> {
    return Promise.resolve(post);
  }

  repostPost(post: WallPost): Promise<WallPost> {
    return Promise.resolve(post);
  }
}
