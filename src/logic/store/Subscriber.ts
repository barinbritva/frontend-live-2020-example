import {WallPost} from '../interfaces/WallPost';

export interface Subscriber {
  (posts: WallPost[]): void
}
