import { Quark } from './quark';
import { quarkState } from './quark-state';

export const quark = <T>(key: string, initialValue: T): void => {
  const instance = new Quark<T>(initialValue);
  quarkState.register(key, instance);
};
