import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card() {
  return (
    <Link to={`/logement/1`} className="card-link-container">                         {/* --- conteneur lien --- */}
      <article className="card">                                                      {/* --- Card --- */}
        <h2 className="card__title">Titre de la location</h2>                         {/* --- Titre de la Card --- */}
      </article>
    </Link>
  );
}

export default Card;