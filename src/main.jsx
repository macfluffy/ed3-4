import { React, StrictMode } from 'react';
import { ReactDOM } from 'react-dom/client';
import './index.css';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
