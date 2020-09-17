import {FeedStore} from '../src/logic/store/FeedStore';
import {FilterStore} from '../src/logic/store/FilterStore';
import {RepositoryComposite} from '../src/logic/service/RepositoryComposite';
import {FakeRepository} from './FakeRepository';

export function createStores(): [FeedStore, FilterStore] {
  const feedStore = new FeedStore(new RepositoryComposite([new FakeRepository()]));
  const filterStore = new FilterStore(feedStore);

  return [
    feedStore,
    filterStore
  ];
}
