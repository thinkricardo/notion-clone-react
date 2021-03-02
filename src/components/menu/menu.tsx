import React from 'react';

import { MenuWrapper } from './menu.styles';

export const Menu: React.FC = ({ children }) => {
  return <MenuWrapper>{children}</MenuWrapper>;
};
