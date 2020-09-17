import {WallPost} from '../../logic/interfaces/WallPost';

export interface FeedProps {
  posts: WallPost[];
  likePost: (post: WallPost) => void;
  repostPost: (post: WallPost) => void;
  commentPost: (post: WallPost, comment: string) => void;
}
