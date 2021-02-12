import { BehaviorSubject, Subscription } from 'rxjs';

export class Quark<T> {
  private value: T;
  private listeners: BehaviorSubject<T>;

  constructor(initialValue: T) {
    this.value = initialValue;
    this.listeners = new BehaviorSubject(this.value);
  }

  get(): T {
    return this.value;
  }

  set(newValue: T): void {
    this.value = newValue;
    this.listeners.next(this.value);
  }

  subscribe(listener: (value: T) => void): Subscription {
    return this.listeners.subscribe(listener);
  }

  unsubscribe(subscription: Subscription): void {
    subscription.unsubscribe();
  }
}
