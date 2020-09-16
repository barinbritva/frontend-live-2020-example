import {FeedStore} from '../../logic/store/FeedStore';
import {WallPost} from '../../logic/interfaces/WallPost';

export interface CommentFormProps {
  post: WallPost;
  feedStore: FeedStore;
}
