import React, { useState } from 'react';

import { EditableBlock, InitialBlock } from '../editable-block';

export const EditablePage: React.FC = () => {
  const [blocks, setBlocks] = useState([InitialBlock]);

  const handleAddBlock = () => {
    const newBlocks = blocks.concat([InitialBlock]);
    setBlocks(newBlocks);
  };

  return (
    <>
      <h2>Page</h2>

      {blocks.map((block, index) => {
        return (
          <EditableBlock
            key={index}
            block={block}
            onAddBlock={handleAddBlock}
          />
        );
      })}
    </>
  );
};
