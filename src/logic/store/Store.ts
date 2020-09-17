import {Subscriber} from './Subscriber';

export interface Store<T> {
  subscribe(subscriber: Subscriber<T>): void;
  unsubscribe(subscriber: Subscriber<T>): void;
  notifySubscribers(data: T): void;
}
