import {WallPost} from '../../logic/interfaces/WallPost';

export interface ActionsProps {
  post: WallPost;
  likePost: (post: WallPost) => void;
  repostPost: (post: WallPost) => void;
}
