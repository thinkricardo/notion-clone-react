import React from 'react';

import { MenuTitleWrapper } from './menu-title.styles';

export const MenuTitle: React.FC = ({ children }) => {
  return <MenuTitleWrapper>{children}</MenuTitleWrapper>;
};
