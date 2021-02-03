import React, { KeyboardEvent, useRef, useState } from 'react';

import { Block } from './block';

type EditableBlockProps = {
  block: Block;
  onAddBlock: (afterBlockId: string) => void;
  onUpdateBlock: (block: Block) => void;
};

export const EditableBlock: React.FC<EditableBlockProps> = ({
  block,
  onAddBlock,
  onUpdateBlock,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState(block);

  const handleInput = () => {
    if (!elementRef.current) {
      return;
    }

    const newBlock = { ...value };
    newBlock.content = elementRef.current.innerHTML;

    setValue(newBlock);
    onUpdateBlock(value);
  };

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter' && !evt.shiftKey) {
      evt.preventDefault();
      onAddBlock(block.id);
    }
  };

  return (
    <div
      ref={elementRef}
      contentEditable={true}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      dangerouslySetInnerHTML={{ __html: value.content }}
    ></div>
  );
};
