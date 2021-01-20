import React from 'react';
import RenderDOM from 'react-dom';

import App from './App';

RenderDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
