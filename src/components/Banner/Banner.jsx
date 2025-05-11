import React from 'react';
import './Banner.scss';

/**
 * Affiche une bannière d'en-tête personnalisable pour différentes pages.
 * Ce composant permet de spécifier une image de fond unique par page,
 * un titre optionnel superposé, et une variation d'opacité pour un overlay.
 * Les variations visuelles (image de fond, opacité de l'overlay) sont
 * gérées par des classes CSS dynamiquement construites à partir des props 'page' et 'opacity'.
 *
 * @param {object} props
 * @param {string} props.page
 * @param {string} [props.title]
 * @param {('dark'|'light')} [props.opacity='dark']
 */
function Banner({ page, title = '', opacity = 'light'}) {                           // page est obligatoire, title et opacity optionnel
 
  validateBannerProps(page, title, opacity);                                        // Appel à la fonction de validation des props
  
  const bannerClass = `banner banner-bg-${page}`;                                   // --- Classe de la bannière selon la page ---
  const overlayClass = `banner__overlay banner__overlay--${opacity}`;

  return (
    <section className={bannerClass}>                                               {/* --- Bannière --- */}
      <div className={overlayClass}></div>                                          {/* --- Overlay de la bannière --- */}
      {title && <h1 className="banner__title">{title}</h1>}                         {/* --- Titre de la bannière --- */}
    </section>
  );
}

/**
 * Valide les propriétés fournies au composant Banner.
 *
 * @param {string} page      - La page pour laquelle le banner est affiché (ex: 'home', 'about', etc..)
 * @param {string} title     - Le titre à afficher dans le banner
 * @param {string} opacity   - L'opacité du banner (doit être 'dark' ou 'light')
 * @throws {Error}           - Si la prop 'page' est manquante ou n'est pas une chaîne de caractères
 * @throws {Error}           - Si la prop 'title' est vide ou n'est pas une chaîne de caractères
 * @throws {Error}           - Si la prop 'opacity' n'est pas 'dark' ou 'light'
 */
function validateBannerProps(page, title, opacity) {
  const validOpacity = ['dark', 'light'];

  // La props 'page' est obligatoire et de type string
  if (typeof page !== 'string' || !page) {
    throw new Error(`Erreur: La prop 'page' est obligatoire et doit être une chaîne de caractères`);
  }

  // Le titre est optionnel. Auquel cas il est de type string et non vide
  if (title && (typeof title !== 'string' || title.trim() === '')) {
    throw new Error(`Erreur: La prop 'title' doit être une chaîne de caractères non vide. Valeur reçue: '${title}'`);
  }

  // L'opacité est optionnelle. Auquel cas il a pour valeur 'dark' ou 'light'
  if (opacity && !validOpacity.includes(opacity)) {
    throw new Error(`Erreur: La prop 'opacity' doit être 'dark' ou 'light'. Valeur reçue: '${opacity}'`);
  }
}

export default Banner;