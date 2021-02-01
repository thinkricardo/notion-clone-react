import React, { KeyboardEvent, useRef, useState } from 'react';

import { Block } from './block';

type EditableBlockProps = {
  block: Block;
  onAddBlock: () => void;
};

export const EditableBlock: React.FC<EditableBlockProps> = ({
  block,
  onAddBlock,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState(block.content);

  const handleInput = () => {
    if (!elementRef.current) {
      return;
    }

    setValue(elementRef.current.innerText);
  };

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      onAddBlock();
    }
  };

  return (
    <div
      ref={elementRef}
      contentEditable={true}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
    >
      {value}
    </div>
  );
};
