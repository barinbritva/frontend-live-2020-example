import {FeedStore} from '../src/logic/store/FeedStore';
import {FilterStore} from '../src/logic/store/FilterStore';
import {RepositoryComposite} from '../src/logic/service/RepositoryComposite';
import {FakeRepository} from './FakeRepository';
import {User} from '../src/logic/interfaces/User';

export function createStores(): [FeedStore, FilterStore, User] {
  const feedStore = new FeedStore(new RepositoryComposite([new FakeRepository()]));
  const filterStore = new FilterStore(feedStore);

  const user: User = {
    name: 'Jhon Doe',
    avatar: 'https://example.com/avatar.jpg',
    username: 'jhon-doe'
  }

  return [
    feedStore,
    filterStore,
    user
  ];
}
