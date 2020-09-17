import {FeedStore} from '../store/FeedStore';
import {FilterStore} from '../store/FilterStore';
import {RepositoryComposite} from '../service/RepositoryComposite';
import {FacebookRepository} from '../repositories/FacebookRepository';

export function createStores(): [FeedStore, FilterStore] {
  const feedStore = new FeedStore(new RepositoryComposite([new FacebookRepository()]));
  const filterStore = new FilterStore(feedStore);

  return [
    feedStore,
    filterStore
  ];
}
