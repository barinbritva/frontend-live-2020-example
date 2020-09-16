import {PostAuthor} from './PostAuthor';
import {SocialMediaProvider} from '../types/SocialMediaProvider';

export interface WallPost {
  provider: SocialMediaProvider;
  id: number;
  text: string;
  date: Date;
  likesAmount: number;
  repostsAmount?: number;
  author: PostAuthor;
  comments: string[];
  image?: string;
}
