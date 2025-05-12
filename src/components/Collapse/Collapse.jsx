import React, { useState } from 'react';
import './Collapse.scss';
import ArrowIcon from '../../assets/arrow.svg';

/**
 * Affiche une section déroulante
 * @param {object} props
 * @param {string} props.title            - Le titre de la collapse
 * @param {string|string[]} props.content - Son contenu (chaîne simple ou un tableau de chaînes pour les listes
 */
function Collapse({ title, content }) {

  const [isOpen, setIsOpen] = useState(false);                                // fermé par défaut

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Détermine si le contenu est un tableau
  const contentIsArray = Array.isArray(content);

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>            {/* --- Collapse --- */}
      <div className="collapse__bar" onClick={toggleCollapse}>                {/* --- Barre --- */}
        <h2 className="collapse__title">{title}</h2>                          {/* --- Titre --- */}
        <img src={ArrowIcon} className="collapse__arrow"/>                    {/* --- Flèche de la collapse --- */}
      </div>

      <div className="collapse__content-wrapper">                             {/* --- wrapper déroulant --- */}
        <div className="collapse__content">                                   {/* --- Contenu textuel  --- */}
          {contentIsArray
            ? content.map((item, index) => <p key={index}>{item}</p>)         // Equipement sous forme de tableau (json)
            : <p>{content}</p>
          }
        </div>
      </div>
    </div>
  );
}

export default Collapse;