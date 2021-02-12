import React, { KeyboardEvent } from 'react';

import { Block } from '../../core/models';
import { useQuarkState } from '../../core/state';
import { store } from '../../core/store';

import { Editable } from '../../elements/editable';

type EditableBlockProps = {
  blockId: string;
};

export const EditableBlock: React.FC<EditableBlockProps> = ({ blockId }) => {
  const [block, setBlock] = useQuarkState<Block>(blockId);

  const handleInput = (value: string) => {
    const newBlock = { ...block };
    newBlock.content = value;

    setBlock(newBlock);
  };

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter' && !evt.shiftKey) {
      evt.preventDefault();
      store.addBlock(block);
    }
  };

  return (
    <Editable
      value={block.content}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
    />
  );
};
