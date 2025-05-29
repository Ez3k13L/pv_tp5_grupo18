import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AlumnosProvider } from './context/AlumnosContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AlumnosProvider>
      <App />
    </AlumnosProvider>
  </BrowserRouter>
);
