import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import lodgingData from '../../data/logement.json';

// page "Accueil"
function Home() {
  return (
    <>
      <Banner
        page = "home"
        title = "Chez vous, partout et ailleurs"
        opacity = "dark"
      />

      <section className="home-gallery-section">                                              {/* --- section Galerie --- */}
        {lodgingData.map(lodging => (
          <Card
            key={lodging.id}
            id={lodging.id}
            title={lodging.title}
            cover={lodging.cover}
          />
        ))}  
      </section>
    </>
  );
}

export default Home;