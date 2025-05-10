import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

// page "Accueil"
function Home() {
  return (
    <>
      <Banner/>

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