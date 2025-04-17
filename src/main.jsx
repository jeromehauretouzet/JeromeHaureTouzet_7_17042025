import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);

/*
- C'est le point de départ de l'exécution de l'application
  on cible l'élément <div id="root"> dans index.html pour insérer le composant principal: AppRouter
*/