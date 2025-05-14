import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

/**
 * Affiche une carte de présentation pour un logement.
 * @param {object} props
 * @param {string} props.id          - L'identifiant unique du logement, utilisé pour le lien
 * @param {string} props.title       - Le titre du logement à afficher
 * @param {string} props.imageUrl    - L'URL de l'image du logement
 */
function Card({ id, title, imageUrl }) {

  validateCardProps(id, title, imageUrl);

  const cardCoverStyle = { backgroundImage: `url(${imageUrl})` };

  return (
    <Link to={`/logement/${id}`} className="card-link-container">                     {/* --- conteneur lien --- */}
      <article className="card" style={cardCoverStyle}>                               {/* --- Card --- */}
        <div className="card__overlay"></div>                                         {/* --- Overlay --- */}
        <h2 className="card__title">{title}</h2>                                      {/* --- Titre de la Card --- */}
      </article>
    </Link>
  );
}


function validateCardProps(id, title, imageUrl) {
  if (typeof id !== 'string' || !id) {
    throw new Error(`Card : La prop 'id' est obligatoire et doit être (string). Valeur reçue: '${id}'`);
  }

  if (typeof title !== 'string' || !title) {
    throw new Error(`Card : La prop 'title' est obligatoire et doit être (string). Valeur reçue: '${title}'`);
  }

  if (typeof imageUrl !== 'string' || !imageUrl) {
    throw new Error(`Card : La prop 'imageUrl' est obligatoire et doit avoir une URL (string). Valeur reçue: '${imageUrl}'`);
  }

}

export default Card;