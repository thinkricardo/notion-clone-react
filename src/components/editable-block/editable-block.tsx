import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';

import { Block } from '../../core/models';
import { store } from '../../core/store';

type EditableBlockProps = {
  blockId: string;
};

export const EditableBlock: React.FC<EditableBlockProps> = ({ blockId }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [block, setBlock] = useState<Block>(store.getBlock(blockId));

  useEffect(() => {
    const subscription = store.subscribe((blocks) => {
      const block = blocks.find((innerBlock) => innerBlock.id === blockId);

      if (block) {
        setBlock(block);
      }
    });
    return () => subscription.unsubscribe();
  }, [blockId]);

  const handleInput = () => {
    if (!elementRef.current) {
      return;
    }

    const newBlock = { ...block };
    newBlock.content = elementRef.current.innerHTML;

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
      dangerouslySetInnerHTML={{ __html: block.content }}
    ></div>
  );
};
