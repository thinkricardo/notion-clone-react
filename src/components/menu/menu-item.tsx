import React from 'react';

import { MenuItemWrapper } from './menu-title.styles';

type MenuItemProps = {
  id: string;
  onItemSelected: (id: string) => void;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  id,
  onItemSelected,
}) => {
  const handleOnClick = () => {
    onItemSelected(id);
  };

  return <MenuItemWrapper onClick={handleOnClick}>{children}</MenuItemWrapper>;
};
