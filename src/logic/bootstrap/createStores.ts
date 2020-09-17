import {FeedStore} from '../store/FeedStore';
import {FilterStore} from '../store/FilterStore';
import {RepositoryComposite} from '../service/RepositoryComposite';
import {FacebookRepository} from '../repositories/FacebookRepository';
import {InstagramRepository} from '../repositories/InstagramRepository';

export function createStores(): [FeedStore, FilterStore] {
  const feedStore = new FeedStore(new RepositoryComposite([
    new FacebookRepository(),
    new InstagramRepository()
  ]));
  const filterStore = new FilterStore(feedStore);

  return [
    feedStore,
    filterStore
  ];
}
