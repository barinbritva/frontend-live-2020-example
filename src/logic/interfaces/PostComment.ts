import {CommentAuthor} from './CommentAuthor';

export interface PostComment {
  text: string;
  date: Date;
  author: CommentAuthor;
}
