import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import FoxContextProvider from './context/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FoxContextProvider>
      <App />
    </FoxContextProvider>
  </React.StrictMode>
);
