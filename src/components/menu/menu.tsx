import React from 'react';

import { MenuWrapper } from './menu.styles';

type MenuProps = {
  isOpen: boolean;
};

export const Menu: React.FC<MenuProps> = ({ children, isOpen }) => {
  return <MenuWrapper isVisible={isOpen}>{children}</MenuWrapper>;
};
