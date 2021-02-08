import React, { KeyboardEvent, useRef, useState } from 'react';

import { Block } from '../../core/models';
import { store } from '../../core/store';

type EditableBlockProps = {
  block: Block;
};

export const EditableBlock: React.FC<EditableBlockProps> = ({ block }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState(block);

  const handleInput = () => {
    if (!elementRef.current) {
      return;
    }

    const newBlock = { ...value };
    newBlock.content = elementRef.current.innerHTML;

    setValue(newBlock);
    store.updateBlock(newBlock);
  };

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter' && !evt.shiftKey) {
      evt.preventDefault();
      store.addBlock(block);
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
