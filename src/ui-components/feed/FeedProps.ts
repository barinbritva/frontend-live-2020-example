import {FeedStore} from '../../logic/store/FeedStore';
import {WallPost} from '../../logic/interfaces/WallPost';

export interface FeedProps {
  posts: WallPost[];
  feedStore: FeedStore;
}
