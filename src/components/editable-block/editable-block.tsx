import React, { KeyboardEvent, useState } from 'react';

import { Block, MenuItemsGroup } from '../../models';
import { useQuarkState } from '../../state';
import { store } from '../../store';

import { Menu } from '../menu';

import { Editable } from '../../elements/editable';

type EditableBlockProps = {
  blockId: string;
};

export const EditableBlock: React.FC<EditableBlockProps> = ({ blockId }) => {
  const [block, setBlock] = useQuarkState<Block>(blockId);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buildMenuItems = (): MenuItemsGroup[] => {
    const menuGroups: MenuItemsGroup[] = [];

    const basicBlocks: MenuItemsGroup = {
      title: 'Basic blocks',
      items: [],
    };

    store.getBlockTypes().map((blockType) => {
      basicBlocks.items.push({
        id: blockType.id,
        title: blockType.name,
      });
    });

    menuGroups.push(basicBlocks);

    return menuGroups;
  };

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
    setIsMenuOpen(false);

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
        <Menu groups={buildMenuItems()} onItemSelected={handleOptionSelected} />
      )}
    </>
  );
};
