import {WallPost} from '../../logic/interfaces/WallPost';
import {FeedStore} from '../../logic/store/FeedStore';

export interface ActionsProps {
  post: WallPost;
  feedStore: FeedStore;
}
