import {WallPost} from '../../logic/interfaces/WallPost';
import {FeedStore} from '../../logic/store/FeedStore';

export interface PostProps {
  post: WallPost;
  feedStore: FeedStore;
}
