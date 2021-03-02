import React from 'react';

import { MenuItem } from './menu-item';
import { MenuTitle } from './menu-title';

import { MenuWrapper } from './menu.styles';

import { MenuItemsGroup } from './menu.model';

type MenuProps = {
  groups: MenuItemsGroup[];
  onItemSelected: (id: string) => void;
};

export const Menu: React.FC<MenuProps> = ({ groups, onItemSelected }) => {
  const handleOnItemSelected = (id: string) => {
    onItemSelected(id);
  };

  return (
    <MenuWrapper>
      {groups.map((group, index) => (
        <div key={index}>
          <MenuTitle>{group.title}</MenuTitle>

          {group.items.map((item) => (
            <MenuItem
              key={item.id}
              id={item.id}
              onItemSelected={handleOnItemSelected}
            >
              {item.title}
            </MenuItem>
          ))}
        </div>
      ))}
    </MenuWrapper>
  );
};
