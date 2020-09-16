import {WallPost} from './WallPost';
import {BaseSocialMediaRepository} from './BaseSocialMediaRepository';

export interface RepostableSocialMediaRepository extends BaseSocialMediaRepository {
  repostPost(post: WallPost): Promise<WallPost>;
}
