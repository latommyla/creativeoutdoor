import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Gamelist from './routes/Gamelist'
import Manual from './routes/Manual'
import Howto from './routes/Howto'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Gamelist />} />
      <Route path="manuals" element={<Manual />} />
      <Route path="howto" element={<Howto />} />
    </Routes>
  </BrowserRouter>
);