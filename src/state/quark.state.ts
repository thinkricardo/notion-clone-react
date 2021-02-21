import { Quark } from './quark';

class QuarkState {
  private state: Map<string, Quark<unknown>>;

  constructor() {
    this.state = new Map<string, Quark<unknown>>();
  }

  get<T>(key: string): Quark<T> {
    if (!this.state.has(key)) {
      throw Error(`quark with key "${key}" not found`);
    }

    return this.state.get(key) as Quark<T>;
  }

  register<T>(key: string, instance: Quark<T>) {
    if (this.state.has(key)) {
      throw Error(`quark with key "${key}" already exists`);
    }

    this.state.set(key, instance as Quark<unknown>);
  }
}

export const quarkState = new QuarkState();
