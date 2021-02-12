import React, { KeyboardEvent, useRef } from 'react';

import { Block } from '../../core/models';
import { useQuarkState } from '../../core/state';
import { store } from '../../core/store';

type EditableBlockProps = {
  blockId: string;
};

export const EditableBlock: React.FC<EditableBlockProps> = ({ blockId }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [block, setBlock] = useQuarkState<Block>(blockId);

  const handleInput = () => {
    if (!elementRef.current) {
      return;
    }

    const newBlock = { ...block };
    newBlock.content = elementRef.current.innerHTML;

    setBlock(newBlock);
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
      dangerouslySetInnerHTML={{ __html: block.content }}
    ></div>
  );
};
