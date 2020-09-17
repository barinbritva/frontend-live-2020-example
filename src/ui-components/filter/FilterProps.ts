import {SocialMediaProvider} from '../../logic/types/SocialMediaProvider';

export interface FilterProps {
  providers: SocialMediaProvider[];
  toggleProvider: (provider: SocialMediaProvider) => void;
}
