import React from 'react';

import { MenuItem } from './menu-item';

export const Menu: React.FC = () => {
  return (
    <div>
      <h6>Basic blocks</h6>

      <MenuItem>Text</MenuItem>
      <MenuItem>Heading 1</MenuItem>
      <MenuItem>Heading 2</MenuItem>
      <MenuItem>Heading 3</MenuItem>
    </div>
  );
};
