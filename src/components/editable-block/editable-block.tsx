import React, { KeyboardEvent, useState } from 'react';

import { Block } from '../../models';
import { useQuarkState } from '../../state';
import { store } from '../../store';

import { Menu, MenuItem, MenuTitle } from '../menu';

import { Editable } from '../../elements/editable';

type EditableBlockProps = {
  blockId: string;
};

export const EditableBlock: React.FC<EditableBlockProps> = ({ blockId }) => {
  const [block, setBlock] = useQuarkState<Block>(blockId);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnInput = (value: string) => {
    setBlock({ ...block, content: value });
  };

  const handleOnKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter' && !evt.shiftKey) {
      evt.preventDefault();
      store.addBlock(block);
    } else if (evt.key === '/') {
      setIsMenuOpen(true);
    }
  };

  const handleOptionSelected = (id: string) => {
    return id;
  };

  return (
    <>
      <Editable
        value={block.content}
        placeholder="Type / for commands"
        onInput={handleOnInput}
        onKeyDown={handleOnKeyDown}
      />

      {isMenuOpen && (
        <Menu>
          <MenuTitle>Basic blocks</MenuTitle>

          <MenuItem id="1" onItemSelected={handleOptionSelected}>
            Text
          </MenuItem>
          <MenuItem id="2" onItemSelected={handleOptionSelected}>
            Heading 1
          </MenuItem>
          <MenuItem id="3" onItemSelected={handleOptionSelected}>
            Heading 2
          </MenuItem>
          <MenuItem id="4" onItemSelected={handleOptionSelected}>
            Heading 3
          </MenuItem>
        </Menu>
      )}
    </>
  );
};
