import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import './About.scss';

function About() {
  return (
    <div className="about-page">
      <Banner/>

      <section className="about-collapses-section">                             {/* --- section Collapse --- */}
        <Collapse/>
        <Collapse/>
        <Collapse/>
        <Collapse/>
      </section>
    </div>
  );
}

export default About;