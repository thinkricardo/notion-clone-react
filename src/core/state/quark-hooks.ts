import { useEffect, useState } from 'react';

import { Quark } from './quark';
import { quarkState } from './quark-state';

export const useQuarkState = <T>(key: string): [T, (newValue: T) => void] => {
  const instance: Quark<T> = quarkState.get<T>(key);

  const [innerValue, setInnerValue] = useState<T>(instance.get());

  useEffect(() => {
    const subscription = instance.subscribe(setInnerValue);
    return () => instance.unsubscribe(subscription);
  }, [instance, setInnerValue]);

  return [innerValue, (newValue: T) => instance.set(newValue)];
};
