import React, { useRef, useState } from 'react';

import { Block } from './block';

type EditableBlockProps = {
  block: Block;
};

export const EditableBlock: React.FC<EditableBlockProps> = ({ block }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState(block.content);

  const handleInput = () => {
    if (!elementRef.current) {
      return;
    }

    setValue(elementRef.current.innerText);
  };

  return (
    <div ref={elementRef} contentEditable={true} onInput={handleInput}>
      {value}
    </div>
  );
};
