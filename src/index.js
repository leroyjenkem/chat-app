import React from 'react';
import ReactDOM from 'react-dom/client';
import { Curtains } from "react-curtains";
import AppRouter from "./components/AppRouter";
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Curtains pixelRatio={Math.min(1.55, window.devicePixelRatio)}>
      <AppRouter />
  </Curtains>
);
