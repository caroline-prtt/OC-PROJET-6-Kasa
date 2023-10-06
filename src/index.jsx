import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "../src/components/header/Header";
import RoutesApp from './components/routes/RoutesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <RoutesApp/>
    </Router>
  </React.StrictMode>
);