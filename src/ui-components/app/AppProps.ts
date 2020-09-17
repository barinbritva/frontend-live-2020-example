import {FilterStore} from '../../logic/store/FilterStore';
import {FeedStore} from '../../logic/store/FeedStore';
import {User} from '../../logic/interfaces/User';

export interface AppProps {
  feedStore: FeedStore;
  filterStore: FilterStore;
  user: User;
}
