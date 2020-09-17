import {WallPost} from '../../logic/interfaces/WallPost';
import {PostComment} from '../../logic/interfaces/PostComment';
import {User} from '../../logic/interfaces/User';

export interface FeedProps {
  user: User;
  posts: WallPost[];
  likePost: (post: WallPost) => void;
  repostPost: (post: WallPost) => void;
  commentPost: (post: WallPost, comment: PostComment) => void;
}
