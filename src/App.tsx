import React from 'react';

import { EditablePage } from './components/editable-page/EditablePage';

import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <h1>Notion Clone React</h1>
      <EditablePage />
    </>
  );
};

export default App;
