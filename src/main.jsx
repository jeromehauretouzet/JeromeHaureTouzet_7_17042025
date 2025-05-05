import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/index';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* L'exécution de AppRouter produit le Virtual DOM */}
    <AppRouter />
  </React.StrictMode>,
);

/*
- C'est le point de départ de l'exécution de l'application
  on cible l'élément <div id="root"> dans index.html pour insérer le composant principal: AppRouter
*/