import React from 'react';

import { useBlocks } from '../../core/store';

import { EditableBlock } from '../editable-block';

export const EditablePage: React.FC = () => {
  const blocks = useBlocks();

  return (
    <>
      <h2>Page</h2>

      {blocks.map((block) => {
        return <EditableBlock key={block.id} block={block} />;
      })}
    </>
  );
};
