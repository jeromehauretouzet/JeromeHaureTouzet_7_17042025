import React from 'react';
import './Banner.scss';


/**
 * Affiche une bannière d'en-tête personnalisable.
 *
 * @param {object} props
 * @param {string} props.imageUrl             - L'URL de l'image de fond
 * @param {string} [props.title]              - Le titre (Optionnel)
 * @param {number} [props.overlayOpacity=0.6] - L'opacité de l'overlay: entre 0 et 1 (Optionnel) 
 */
function Banner({ imageUrl, title = '', overlayOpacity = 0.3 }) {
 
  validateBannerProps(imageUrl, title, overlayOpacity);                             // Appel à la fonction de validation des props
  
  const bannerStyle = { backgroundImage: `url(${imageUrl})` };

  const overlayStyle = { backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` };

  return (
    <section className="banner" style={bannerStyle}>                                {/* --- Bannière --- */}
      <div className="banner__overlay" style={overlayStyle}></div>                  {/* --- Overlay de la bannière --- */}
      {title && <h1 className="banner__title">{title}</h1>}                         {/* --- Titre de la bannière --- */}
    </section>
  );
}


function validateBannerProps(imageUrl, title, overlayOpacity) {

  if (typeof imageUrl !== 'string' || !imageUrl) {
    throw new Error(`Banner : La prop 'imageUrl' est obligatoire et doit avoir une URL (string). Valeur reçue: '${imageUrl}'`);
  }

  if (title && (typeof title !== 'string')) {
    throw new Error(`Banner: La prop 'title' doit être (string). Valeur reçue: '${title}'`);
  }

  if (typeof overlayOpacity !== 'number' || overlayOpacity < 0 || overlayOpacity > 1) {
    throw new Error(`Banner: La prop 'overlayOpacity' doit être un nombre entre 0 et 1. Valeur reçue: '${overlayOpacity}'`);
  }
}

export default Banner;