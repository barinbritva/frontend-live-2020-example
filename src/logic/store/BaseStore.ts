import {Store} from './Store';
import {Subscriber} from './Subscriber';

export abstract class BaseStore<T> implements Store<T> {
  protected subscribers: Subscriber<T>[];

  protected constructor() {
    this.subscribers = [];
  }

  notifySubscribers(data: T): void {
    this.subscribers.forEach((subscriber) => {
      subscriber(data);
    })
  }

  subscribe(subscriber: Subscriber<T>): void {
    if (this.subscribers.indexOf(subscriber) === -1) {
      this.subscribers.push(subscriber);
    }
  }

  unsubscribe(subscriber: Subscriber<T>): void {
    const itemIndex = this.subscribers.indexOf(subscriber)

    if (itemIndex > -1) {
      this.subscribers.splice(itemIndex, 1);
    }
  }
}
