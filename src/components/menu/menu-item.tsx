import React from 'react';

import { MenuItemWrapper } from './menu-title.styles';

export const MenuItem: React.FC = ({ children }) => {
  return <MenuItemWrapper>{children}</MenuItemWrapper>;
};
