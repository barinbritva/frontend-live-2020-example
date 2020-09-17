import {PostAuthor} from './PostAuthor';
import {SocialMediaProvider} from '../types/SocialMediaProvider';
import {PostComment} from './PostComment';

export interface WallPost {
  provider: SocialMediaProvider;
  id: number;
  text: string;
  date: Date;
  likesAmount: number;
  repostsAmount?: number;
  author: PostAuthor;
  comments: PostComment[];
  image?: string;
}
