import { Quark } from './quark';
import { quarkState } from './quark-state';

export const useQuarkState = <T>(key: string): [T, (newValue: T) => void] => {
  const instance: Quark<T> = quarkState.get<T>(key);

  return [instance.get(), (newValue: T) => instance.set(newValue)];
};
