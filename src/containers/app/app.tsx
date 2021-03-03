import React from 'react';

import { EditablePage } from '../../components/editable-page';

import { AppWrapper } from './app.styles';

export const App: React.FC = () => {
  return (
    <AppWrapper>
      <EditablePage />
    </AppWrapper>
  );
};
