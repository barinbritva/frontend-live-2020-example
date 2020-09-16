import {WallPost} from '../../src/logic/interfaces/WallPost';
import {RepostableSocialMediaRepository} from '../../src/logic/interfaces/RepostableSocialMediaRepository';
import {SocialMediaProvider} from '../../src/logic/types/SocialMediaProvider';

export class StubTwitterRepository implements RepostableSocialMediaRepository {
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
