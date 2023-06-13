import '../styles/Carroussel.css'
import VectorG from '../assets/vectorGauche.png'
import VectorD from '../assets/vectorDroite.png'
import { useState } from 'react'

function Slide({ images }) {
  const [current, setCurrent] = useState(0);
  const img = <img src={images[current]} alt="interieur de l'appartement" className="apptInt" />;
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  const showVectors = images.length > 1; // Condition pour afficher les vecteurs

  return (
    <div className='carroussel'>
      {showVectors && (
        <div className='vectorG' onClick={prevSlide}>
          <img src={VectorG} alt="fleche precedente" className="vectorGauche" />
        </div>
      )}

      <div>{img}</div>

      {showVectors && (
        <div className='vectorD' onClick={nextSlide}>
          <img src={VectorD} alt="fleche suivante" className="vectorDroite" />
        </div>
      )}
    </div>
  );
}

export default Slide