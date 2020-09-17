import {WallPost} from '../../logic/interfaces/WallPost';

export interface CommentFormProps {
  post: WallPost;
  commentPost: (post: WallPost, comment: string) => void;
}
