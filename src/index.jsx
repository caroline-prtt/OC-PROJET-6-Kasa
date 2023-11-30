import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "../src/components/header/Header";
import RoutesApp from './components/routes/RoutesApp';
import Footer from './components/footer/Footer'
import "./index.scss"

// Ajout basename à Router pour le déploiement du site sur Github Pages (nom du repository)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/OC-PROJET-6-Kasa"> 
      <Header/>
      <RoutesApp/>
      <Footer/>
    </Router>
  </React.StrictMode>
);