import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CategoryProvider } from './Context/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryProvider>
    <App />
    </CategoryProvider>
  </React.StrictMode>
);


