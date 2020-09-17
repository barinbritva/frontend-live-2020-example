import {WallPost} from './WallPost';
import {SocialMediaProvider} from '../types/SocialMediaProvider';
import {PostComment} from './PostComment';

export interface BaseSocialMediaRepository {
  provider: SocialMediaProvider;
  commentPost(post: WallPost, comment: PostComment): Promise<WallPost>;
  getAllPosts(): Promise<WallPost[]>;
  likePost(post: WallPost): Promise<WallPost>;
}
