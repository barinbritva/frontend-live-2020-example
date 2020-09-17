import {RepostableSocialMediaRepository} from './RepostableSocialMediaRepository';
import {SocialMediaProvider} from '../types/SocialMediaProvider';

export interface RepositoryComposite extends RepostableSocialMediaRepository {
  filterPosts(enabledProviders: SocialMediaProvider[]): void;
  getFilters(): SocialMediaProvider[];
}
