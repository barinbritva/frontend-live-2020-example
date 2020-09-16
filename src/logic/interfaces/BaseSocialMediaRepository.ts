import {WallPost} from './WallPost';
import {SocialMediaProvider} from '../types/SocialMediaProvider';

export interface BaseSocialMediaRepository {
  provider: SocialMediaProvider;
  commentPost(post: WallPost, comment: string): Promise<WallPost>;
  getAllPosts(): Promise<WallPost[]>;
  likePost(post: WallPost): Promise<WallPost>;
}
