import React, { useState } from 'react';

import { generateId } from '../../utils';

import { Block, EditableBlock, InitialBlock } from '../editable-block';

const initialList: Block[] = [{ ...InitialBlock, id: generateId() }];

export const EditablePage: React.FC = () => {
  const [blocks, setBlocks] = useState(initialList);

  const handleAddBlock = (afterBlockId: string) => {
    const newBlock = { ...InitialBlock, id: generateId() };
    const blockIndex = blocks.findIndex((block) => block.id === afterBlockId);

    const newBlocks = [...blocks];
    newBlocks.splice(blockIndex + 1, 0, newBlock);

    setBlocks(newBlocks);
  };

  return (
    <>
      <h2>Page</h2>

      {blocks.map((block) => {
        return (
          <EditableBlock
            key={block.id}
            block={block}
            onAddBlock={handleAddBlock}
          />
        );
      })}
    </>
  );
};
