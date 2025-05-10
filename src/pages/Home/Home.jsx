import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

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
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </>
  );
}

export default Home;