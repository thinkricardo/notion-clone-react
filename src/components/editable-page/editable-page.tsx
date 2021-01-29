import React, { useState } from 'react';

import { EditableBlock, InitialBlock } from '../editable-block';

export const EditablePage: React.FC = () => {
  const [blocks] = useState([{ ...InitialBlock }]);

  return (
    <>
      <h2>Page</h2>

      {blocks.map((block, index) => {
        return <EditableBlock key={index} block={block} />;
      })}
    </>
  );
};
