import React, { useState } from 'react';
import './Gallery.scss';
import arrowPreviousCollapse from '../../assets/arrow-previous-collapse.svg';
import arrowNextCollapse from '../../assets/arrow-next-collapse.svg';


/**
 * Affiche une galerie d'image (compteur et bouton précédent et suivant inclus)
 * @param {object} props
 * @param {string[]} props.pictures          - un tableau d'URL d'images 
 */
function Gallery({ pictures }) {

  validateGalleryProps(pictures);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPictures = pictures.length;

  // --- Aller à l'image précédente ---
  const previous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? totalPictures - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // --- aller à l'image suivante ---
  const next = () => {
    const isLastSlide = currentIndex === totalPictures - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // --- Afficher le compteur ---
  const showControls = totalPictures > 1;

  return (
    <div className="gallery">
      <img src={pictures[currentIndex]} alt= "images du carrousel" className="gallery__image" />          {/* --- Affiche l' image courrante --- */}
    
      {/* S'il n'y a qu'une seule image, les contrôles n'apparaissent pas. */}
      {showControls && ( 
        <>
          <button onClick={previous} className="gallery__arrow gallery__arrow--left">                     {/* --- Flèche retour --- */}
            <img src={arrowPreviousCollapse} alt="Précédent" />
          </button>

          <button onClick={next} className="gallery__arrow gallery__arrow--right">                        {/* --- Flèche suivante --- */}
            <img src={arrowNextCollapse} alt="Suivant" />
          </button>

          <span className="gallery__counter"> {currentIndex + 1} / {totalPictures} </span>                {/* --- Page courante --- */}
        </>
      )}

    </div>
  );
}


function validateGalleryProps(pictures) {
  if ((typeof pictures !== 'string' && !Array.isArray(pictures)) || !pictures) {
    throw new Error(`Gallery : La prop 'pictures' est obligatoire et doit être  (string[]). Valeur reçue: '${pictures}'`);
  }
}

export default Gallery;




