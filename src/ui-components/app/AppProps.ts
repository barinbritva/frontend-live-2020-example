import {FilterStore} from '../../logic/store/FilterStore';
import {FeedStore} from '../../logic/store/FeedStore';

export interface AppProps {
  feedStore: FeedStore;
  filterStore: FilterStore;
}
