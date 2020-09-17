import {WallPost} from '../../logic/interfaces/WallPost';
import {PostComment} from '../../logic/interfaces/PostComment';

export interface CommentsProps {
  post: WallPost;
  comments: PostComment[];
}
