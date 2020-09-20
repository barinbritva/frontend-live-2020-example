import {RepostableSocialMediaRepository} from './RepostableSocialMediaRepository';
import {SocialMediaProvider} from '../types/SocialMediaProvider';

export interface RepositoryComposite extends RepostableSocialMediaRepository {
  filterRepositories(enabledProviders: SocialMediaProvider[]): void;
  getEnabledRepositories(): SocialMediaProvider[];
}
