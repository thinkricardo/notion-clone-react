import React, { useEffect, useState } from 'react';

import { store } from '../../core/store';

import { Block, EditableBlock } from '../editable-block';

export const EditablePage: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const subscription = store.getState().subscribe(setBlocks);
    return () => subscription.unsubscribe();
  }, []);

  const handleAddBlock = (afterBlockId: string) => {
    const block = blocks.find((innerBlock) => innerBlock.id === afterBlockId);

    if (block) {
      store.addBlock(block);
    }
  };

  const handleUpdateBlock = (block: Block) => {
    store.updateBlock(block);
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
