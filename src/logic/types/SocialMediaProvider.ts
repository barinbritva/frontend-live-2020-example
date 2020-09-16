import {TwitterProvider} from './TwitterProvider';
import {FacebookProvider} from './FacebookProvider';
import {InstagramProvider} from './InstagramProvider';
import {CompositeProvider} from './CompositeProvider';

export type SocialMediaProvider = TwitterProvider | FacebookProvider | InstagramProvider | CompositeProvider
