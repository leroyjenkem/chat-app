import React from 'react';
import ReactDOM from 'react-dom/client';
import { Curtains } from "react-curtains";
import AppRouter from "./components/AppRouter";
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
      <AppRouter />
    </Curtains>
  </React.StrictMode>
);
