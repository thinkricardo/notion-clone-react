import { useEffect, useState } from 'react';

import { Block } from '../models';

import { store } from './store';

export const useBlocks = (): Block[] => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const subscription = store.subscribe(setBlocks);
    return () => subscription.unsubscribe();
  }, []);

  return blocks;
};
