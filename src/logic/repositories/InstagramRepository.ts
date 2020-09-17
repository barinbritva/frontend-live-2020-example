import {BaseSocialMediaRepository} from '../interfaces/BaseSocialMediaRepository';
import {WallPost} from '../interfaces/WallPost';
import {SocialMediaProvider} from '../types/SocialMediaProvider';
import {PostComment} from '../interfaces/PostComment';

export class InstagramRepository implements BaseSocialMediaRepository {
  provider: SocialMediaProvider = 'instagram';
  commentPost(post: WallPost, comment: PostComment): Promise<WallPost> {
    console.log(comment);
    return Promise.resolve(post);
  }

  getAllPosts(): Promise<WallPost[]> {
    return Promise.resolve([]);
  }

  likePost(post: WallPost): Promise<WallPost> {
    return Promise.resolve(post);
  }
}
