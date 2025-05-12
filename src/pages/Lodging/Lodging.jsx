import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery';
import Collapse from '../../components/Collapse/Collapse';
import lodgingData from '../../data/logement.json';
import './Lodging.scss';

function Lodging() {

  const { id } = useParams();                                                           // Récupère l'ID du logement depuis l'URL
  const lodging = lodgingData.find(item => item.id === id);                             // Trouve le logement correspondant à l'ID

  if (!lodging) {                                                                       // Redirection si logement inexistant
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="lodging-page">
      <Gallery />                                                                       {/* --- Galerie d'images --- */}

      <section className="lodging-main-info">                                           {/* --- Info principale --- */}

        <div className="lodging-info">                                                  {/* --- Informations --- */}
          <h1 className="lodging-info__title">Titre du Logement</h1>                    {/* --- Titre --- */}
          <p className="lodging-info__location">Paris, Île-de-France</p>                {/* --- Logement --- */}
          <div className="lodging-info__tags">                                          {/* --- Tags --- */}
            <span className="tag">Cozy</span>                                           {/* --- Tag --- */}
            <span className="tag">Canal</span>
            <span className="tag">Paris 10</span>
          </div>
        </div>

        <div className="lodging-host-rating">                                           {/* --- Hôte et Notation --- */}
          <div className="lodging-host">                                                {/* --- Hôte --- */}
            <p className="lodging-host__name">Alexandre<br />Dumas</p>                  {/* --- Nom --- */}
            <div className="lodging-host__picture"></div>                               {/* --- Photo --- */}
          </div>
          <div className="lodging-rating">                                              {/* --- Notation (Étoiles) --- */}
            <span className="star star-filled"/>                                        {/* --- Étoile rempli--- */}
            <span className="star star-filled"/>
            <span className="star star-filled"/>
            <span className="star star-filled"/>
            <span className="star"/>                                                    {/* --- Étoile vide --- */}
          </div>
        </div>
      </section>

      <section className="lodging-collapses-container">                                 {/* --- Conteneur des menus déroulants --- */}
        <Collapse
          title="Description"
          content={lodging.description}
        />
        <Collapse
          title="Équipements"
          content={lodging.equipments}
        />
      </section>
    </div>
  );
}

export default Lodging;