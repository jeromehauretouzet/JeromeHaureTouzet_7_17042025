import React from 'react';
import './Banner.scss';

function Banner({ page, title, opacity }) {                                         // page: home, about  |  opacity: dark, light
  const bannerClass = `banner banner-bg-${page}`;                                   // --- Classe de la bannière selon la page ---
  const overlayClass = `banner__overlay banner__overlay--${opacity}`;

  return (
    <section className={bannerClass}>                                               {/* --- Bannière --- */}
      <div className={overlayClass}></div>                                          {/* --- Overlay de la bannière --- */}
      {title && <h1 className="banner__title">{title}</h1>}                         {/* --- Titre de la bannière --- */}
    </section>
  );
}

export default Banner;