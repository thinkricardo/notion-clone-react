import React, { useEffect, useState } from 'react';

import { store } from '../../core/store';
import { generateId } from '../../utils';

import { Block, EditableBlock, InitialBlock } from '../editable-block';

export const EditablePage: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const subscription = store.getState().subscribe(setBlocks);
    return () => subscription.unsubscribe();
  }, []);

  const handleAddBlock = (afterBlockId: string) => {
    const newBlock = { ...InitialBlock, id: generateId() };
    const blockIndex = blocks.findIndex((block) => block.id === afterBlockId);

    const newBlocks = [...blocks];
    newBlocks.splice(blockIndex + 1, 0, newBlock);

    setBlocks(newBlocks);
  };

  const handleUpdateBlock = (block: Block) => {
    const blockIndex = blocks.findIndex(
      (innerBlock) => innerBlock.id === block.id
    );

    const newBlocks = [...blocks];
    newBlocks[blockIndex] = { ...block };

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
            onUpdateBlock={handleUpdateBlock}
          />
        );
      })}
    </>
  );
};
