import React from 'react';

import { MenuItem } from './menu-item';
import { MenuTitle } from './menu-title';

export const Menu: React.FC = () => {
  return (
    <div>
      <MenuTitle>Basic blocks</MenuTitle>

      <MenuItem>Text</MenuItem>
      <MenuItem>Heading 1</MenuItem>
      <MenuItem>Heading 2</MenuItem>
      <MenuItem>Heading 3</MenuItem>
    </div>
  );
};
