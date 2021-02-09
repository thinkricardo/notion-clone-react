import React, { useEffect, useState } from 'react';

import { store } from '../../core/store';

import { EditableBlock } from '../editable-block';

export const EditablePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blockIds, setBlockIds] = useState<string[]>([]);

  useEffect(() => {
    if (isLoading) {
      store.initStore();
      setIsLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    const subscription = store.subscribeIds(setBlockIds);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <h2>Page</h2>

      {blockIds.map((blockId) => {
        return <EditableBlock key={blockId} blockId={blockId} />;
      })}
    </>
  );
};
