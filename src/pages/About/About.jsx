import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import './About.scss';
import aboutBannerImage from '../../assets/banner-about.jpg';
import aboutData from '../../data/about.json';

function About() {
  return (
    <div className="about-page">
      <Banner
        imageUrl={aboutBannerImage}
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