import {WallPost} from '../../logic/interfaces/WallPost';
import {SocialMediaProvider} from '../../logic/types/SocialMediaProvider';

export interface AppState {
  posts: WallPost[];
  enabledProviders: SocialMediaProvider[];
}
