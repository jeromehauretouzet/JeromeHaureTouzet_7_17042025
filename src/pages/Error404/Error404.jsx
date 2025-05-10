import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.scss';

function Error404() {
  return (
    <div className="error404-page">
      <h1 className="error404-page__title">404</h1>                                               {/* --- Titre (404) --- */}
      <p className="error404-page__message">Oups! La page que vous demandez n'existe pas.</p>     {/* --- Message d'erreur --- */}
      <Link to="/" className="error404-page__link">                                               {/* --- Lien vers page d'Accueil --- */}
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error404;