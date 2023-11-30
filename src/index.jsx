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
    {/* Ajout basename pour adapter l'URL suite au déploiement sur github pages (nom du repo)*/}
    <Router basename="/OC-PROJET-6-Kasa"> 
      <Header/>
      <RoutesApp/>
      <Footer/>
    </Router>
  </React.StrictMode>
);