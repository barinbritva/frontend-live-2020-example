import {WallPost} from '../../logic/interfaces/WallPost';

export interface CommentsProps {
  post: WallPost;
  comments: string[];
}
