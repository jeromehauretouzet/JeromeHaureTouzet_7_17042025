import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

/**
 * Affiche une carte de présentation pour un logement.
 * @param {object} props
 * @param {string} props.id       - L'identifiant unique du logement, utilisé pour le lien
 * @param {string} props.title    - Le titre du logement à afficher
 * @param {string} props.cover    - L'URL de l'image du logement
 */
function Card({ id, title, cover }) {

  validateCardProps(id, title, cover);

  const cardCoverStyle = { backgroundImage: `url(${cover})` };

  return (
    <Link to={`/logement/${id}`} className="card-link-container">                     {/* --- conteneur lien --- */}
      <article className="card" style={cardCoverStyle}>                               {/* --- Card --- */}
        <div className="card__overlay"></div>                                         {/* --- Overlay --- */}
        <h2 className="card__title">{title}</h2>                                      {/* --- Titre de la Card --- */}
      </article>
    </Link>
  );
}

/**
 * Valide les propriétés fournies au composant Card
 * @param {string} id           - L'id du logement
 * @param {string} title        - Le titre du logement
 * @param {string} cover        - L'URL de l'image du logement
 * @throws {Error}              - Si une prop requise est manquante ou a un type incorrect
 */
function validateCardProps(id, title, cover) {
  if (typeof id !== 'string' || !id) {
    throw new Error(`Erreur: La prop 'id' est obligatoire et doit être une chaîne de caractères.`);
  }

  if (typeof title !== 'string' || !title) {
    throw new Error(`Erreur: La prop 'title' est obligatoire et doit être une chaîne de caractères non vide.`);
  }

  if (typeof cover !== 'string' || !cover) {
    throw new Error(`Erreur: La prop 'cover' (URL de l'image) est obligatoire et doit être une chaîne de caractères.`);
  }

}

export default Card;