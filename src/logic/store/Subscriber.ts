export interface Subscriber<T> {
  (data: T): void;
}
