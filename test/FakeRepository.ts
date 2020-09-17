import {WallPost} from '../src/logic/interfaces/WallPost';
import {RepostableSocialMediaRepository} from '../src/logic/interfaces/RepostableSocialMediaRepository';
import {SocialMediaProvider} from '../src/logic/types/SocialMediaProvider';

export class FakeRepository implements RepostableSocialMediaRepository {
  provider: SocialMediaProvider = 'twitter';

  commentPost(post: WallPost, comment: string): Promise<WallPost> {
    post.comments.push(comment)
    return Promise.resolve(post);
  }

  getAllPosts(): Promise<WallPost[]> {
    return Promise.resolve([]);
  }

  likePost(post: WallPost): Promise<WallPost> {
    post.likesAmount++;
    return Promise.resolve(post);
  }

  repostPost(post: WallPost): Promise<WallPost> {
    post.repostsAmount!++;
    return Promise.resolve(post);
  }
}
