import { useEffect, useState } from 'react';

import { store } from './store';

import { Block } from '../../components/editable-block';

export const useBlocks = (): Block[] => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const subscription = store.subscribe(setBlocks);
    return () => subscription.unsubscribe();
  }, []);

  return blocks;
};
