import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import lodgingData from '../../data/logement.json';
import homeBannerImage from '../../assets/banner-home.jpg';

// page "Accueil"
function Home() {
  return (
    <>
      <Banner
        imageUrl={homeBannerImage}
        title="Chez vous, partout et ailleurs"
        overlayOpacity={0.6}
      />

      <section className="home-gallery-section">                                              {/* --- section Galerie --- */}
        {lodgingData.map(lodging => (
          <Card
            key={lodging.id}
            id={lodging.id}
            title={lodging.title}
            imageUrl={lodging.cover}
          />
        ))}  
      </section>
    </>
  );
}

export default Home;