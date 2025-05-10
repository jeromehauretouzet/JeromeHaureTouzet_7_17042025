import React from 'react';
import './Banner.scss';

function Banner() {
  return (
    <section className="banner">                                                    {/* --- Bannière --- */}
      <div className="banner__overlay"></div>                                       {/* --- Overlay de la bannière --- */}
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>             {/* --- Titre de la bannière --- */}
    </section>
  );
}

export default Banner;