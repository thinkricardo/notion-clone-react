import React, { KeyboardEvent } from 'react';

import { Block } from '../../models';
import { useQuarkState } from '../../state';
import { store } from '../../store';

import { Editable } from '../../elements/editable';

type EditableBlockProps = {
  blockId: string;
};

export const EditableBlock: React.FC<EditableBlockProps> = ({ blockId }) => {
  const [block, setBlock] = useQuarkState<Block>(blockId);

  const handleOnInput = (value: string) => {
    const newBlock = { ...block };
    newBlock.content = value;

    setBlock(newBlock);
  };

  const handleOnKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter' && !evt.shiftKey) {
      evt.preventDefault();
      store.addBlock(block);
    }
  };

  return (
    <Editable
      value={block.content}
      placeholder="Type / for commands"
      onInput={handleOnInput}
      onKeyDown={handleOnKeyDown}
    />
  );
};
