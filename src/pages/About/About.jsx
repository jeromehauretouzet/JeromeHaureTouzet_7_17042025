import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import './About.scss';

// Données pour les collapses de la page "À Propos"
const aboutData = [
  {
    id: "fiabilite",
    title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    id: "respect",
    title: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    id: "service",
    title: "Service",
    content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
    id: "securite",
    title: "Sécurité",
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
];

function About() {
  return (
    <div className="about-page">
      <Banner
        page = "about"
      />

      <section className="about-collapses-section">                             {/* --- section Collapse --- */}
        {aboutData.map(item => (
          <Collapse
            key={item.id}                                                       // Key obligatoire car map
            title={item.title}
            content={item.content}
          />
        ))}
      </section>
    </div>
  );
}

export default About;