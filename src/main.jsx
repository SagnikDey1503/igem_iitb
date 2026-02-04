import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const loader = document.getElementById('app-loader');
if (loader) {
  requestAnimationFrame(() => {
    loader.classList.add('is-hidden');
    setTimeout(() => loader.remove(), 600);
  });
}
