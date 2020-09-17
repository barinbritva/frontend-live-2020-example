import {WallPost} from '../../logic/interfaces/WallPost';

export interface PostProps {
  post: WallPost;
  likePost: (post: WallPost) => void;
  repostPost: (post: WallPost) => void;
  commentPost: (post: WallPost, comment: string) => void;
}
