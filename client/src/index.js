import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>           { /*now our context user,isfetching,etc. can reach every component */}
      <App />
    </ContextProvider>
  </React.StrictMode>
);

