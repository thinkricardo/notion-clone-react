import React from 'react';

import { MenuWrapper } from './menu.styles';

import { MenuItem } from './menu-item';
import { MenuTitle } from './menu-title';

type MenuProps = {
  isOpen: boolean;
};

export const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <MenuWrapper isVisible={isOpen}>
      <MenuTitle>Basic blocks</MenuTitle>

      <MenuItem>Text</MenuItem>
      <MenuItem>Heading 1</MenuItem>
      <MenuItem>Heading 2</MenuItem>
      <MenuItem>Heading 3</MenuItem>
    </MenuWrapper>
  );
};
