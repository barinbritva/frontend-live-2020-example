import {WallPost} from '../../logic/interfaces/WallPost';
import {PostComment} from '../../logic/interfaces/PostComment';
import {User} from '../../logic/interfaces/User';

export interface CommentFormProps {
  user: User;
  post: WallPost;
  commentPost: (post: WallPost, comment: PostComment) => void;
}
