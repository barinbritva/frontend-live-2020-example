import {SocialMediaProvider} from '../types/SocialMediaProvider';
import {BaseStore} from './BaseStore';
import {FeedStore} from './FeedStore';

export class FilterStore extends BaseStore<SocialMediaProvider[]>{
  private feedStore: FeedStore;

  constructor(feedStore: FeedStore) {
    super();
    this.feedStore = feedStore;
  }

  public getEnabled = (): SocialMediaProvider[] => {
    return this.feedStore.getFilters();
  }

  public toggleProvider = (provider: SocialMediaProvider) => {
    const enabledProviders = this.getEnabled();
    const itemIndex = enabledProviders.indexOf(provider);

    if (itemIndex === -1) {
      enabledProviders.push(provider);
    } else {
      enabledProviders.splice(itemIndex, 1);
    }

    console.log('enabledProviders', enabledProviders)

    this.feedStore.filter(enabledProviders);
    this.notifySubscribers(this.feedStore.getFilters());
  }
}
