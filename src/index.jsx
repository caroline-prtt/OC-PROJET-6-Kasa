import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "../src/components/header/Header";
import RoutesApp from './components/routes/RoutesApp';
import Footer from './components/footer/Footer'
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <RoutesApp/>
      <Footer/>
    </Router>
  </React.StrictMode>
);