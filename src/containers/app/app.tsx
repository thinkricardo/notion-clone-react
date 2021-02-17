import React from 'react';

import { EditablePage } from '../../components/editable-page';

import './app.scss';

export const App: React.FC = () => {
  return (
    <>
      <h1>Notion Clone React</h1>
      <EditablePage />
    </>
  );
};
