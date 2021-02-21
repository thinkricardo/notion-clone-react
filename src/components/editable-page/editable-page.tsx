import React, { useEffect, useState } from 'react';

import { useQuarkValue } from '../../state';
import { store } from '../../store';

import { EditableBlock } from '../editable-block';

export const EditablePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const blockIds = useQuarkValue<string[]>('blockIds');

  useEffect(() => {
    if (isLoading) {
      store.initStore();
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <>
      <h2>Page</h2>

      {blockIds.map((blockId) => {
        return <EditableBlock key={blockId} blockId={blockId} />;
      })}
    </>
  );
};
