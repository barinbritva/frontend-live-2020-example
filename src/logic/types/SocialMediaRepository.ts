import {BaseSocialMediaRepository} from '../interfaces/BaseSocialMediaRepository';
import {RepostableSocialMediaRepository} from '../interfaces/RepostableSocialMediaRepository';

export type SocialMediaRepository = BaseSocialMediaRepository | RepostableSocialMediaRepository;
