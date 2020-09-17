import {FeedStore} from '../store/FeedStore';
import {FilterStore} from '../store/FilterStore';
import {RepositoryService} from '../service/RepositoryService';
import {FacebookRepository} from '../repositories/FacebookRepository';
import {InstagramRepository} from '../repositories/InstagramRepository';

export function createStores(): [FeedStore, FilterStore] {
  const feedStore = new FeedStore(new RepositoryService([
    new FacebookRepository(),
    new InstagramRepository()
  ]));
  const filterStore = new FilterStore(feedStore);

  return [
    feedStore,
    filterStore
  ];
}
