import React from 'react';

import { render } from "react-dom";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Manual from './Manual';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

