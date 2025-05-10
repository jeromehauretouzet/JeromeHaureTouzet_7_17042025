import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Lodging from '../pages/Lodging/Lodging';
import Error404 from '../pages/Error404/Error404';
import MainContainer from '../components/Main-container/Main-container';

function AppRouter() {
  return (
    <Router>
      <Routes>
      {/* --- Route parent --- */}
      <Route element={<MainContainer />}>
          {/* --- Route enfants--- */}
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<Lodging />} />
          <Route path="*" element={<Error404 />} />
      </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;

/*
- React:  application qui se charge en une seule fois (Single Page Application - SPA).

- Router: gère l'historique et l'URL du navigateur.
          changer d'url SANS recharger la page
          routage de l'application.

- Routes: Permet de choisir quel page afficher en fonction de l'url et affiche le premier composant qui correspont à l'url
- Route:  Associe l'url à un composant React

- "id" est l'identifiant du logement à afficher.
- path="*" : La route par défaut si aucune autre ne correspond, utilisée pour la page 404.
*/