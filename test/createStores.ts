import {FeedStore} from '../src/logic/store/FeedStore';
import {FilterStore} from '../src/logic/store/FilterStore';
import {RepositoryService} from '../src/logic/service/RepositoryService';
import {FakeRepository} from './FakeRepository';

export function createStores(): [FeedStore, FilterStore] {
  const feedStore = new FeedStore(new RepositoryService([new FakeRepository()]));
  const filterStore = new FilterStore(feedStore);

  return [
    feedStore,
    filterStore
  ];
}
