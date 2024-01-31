import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This index.js file renders the App Component
// React.StrictMode shows errors when coding in an unrecommended way
// Given with the React Boilerplate Code

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


