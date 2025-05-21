import React from 'react';
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

  const hostName = lodging.host.name.split(' ');                                        // Sépare le nom et le prénom
  const firstName = hostName[0];
  const name = hostName[1];

  return (
    <div className="lodging-page">
      <Gallery pictures={lodging.pictures} />                                           {/* --- Galerie d'images --- */}

      <section className="lodging-main-info">                                           {/* --- Info principale --- */}

        <div className="lodging-info">                                                  {/* --- Informations --- */}
          <h1 className="lodging-info__title">{lodging.title}</h1>                      {/* --- Titre --- */}
          <p className="lodging-info__location">{lodging.location}</p>                  {/* --- Localisation --- */}
          <div className="lodging-info__tags">                                          {/* --- Tags --- */}
            {lodging.tags.map((tag, index) => (
              <span key={`${tag}-${index}`} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="lodging-host-rating">                                           {/* --- Hôte et Notation --- */}
          <div className="lodging-host">                                                {/* --- Hôte --- */}
            <p className="lodging-host__name">
              {firstName}
              <br />
              {name}
            </p>
            <img src={lodging.host.picture}                                             /* --- Photo de profil --- */
                 alt="photo de profil" 
                 className="lodging-host__picture"/>
          </div>

          <div className="lodging-rating">                                              {/* --- Notation (Étoiles) --- */}
            {[...Array(5)].map((_, index) => {
              return (
                <span
                  key={index}
                  className={`star ${index + 1 <= parseInt(lodging.rating) ? 'star-filled' : ''}`}
                />
              );
            })}
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