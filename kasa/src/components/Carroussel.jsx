import '../styles/Carroussel.css'
import VectorG from '../assets/vectorGauche.png'
import VectorD from '../assets/vectorDroite.png'
import { useState } from 'react'


function Carroussel({images}) {
  const img = <img src={images} alt="interieur de l'appartement" className="apptInt" />
  console.log('Carroussel :' + images)
  
   const [current, setCurrent] = useState(0);
   const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };



  return (
    <div className='carroussel'>
    <div className='vectorG' onClick={prevSlide}>
    <img src={VectorG} alt="fleche precedente" className="vectorGauche" />
    </div>
    
    <div> {img}  </div>
    
    <div className='verctorD' onClick={nextSlide}>
    <img src={VectorD} alt="fleche suivante" className="vectorDroite" />
    </div>
    </div>
    )
  }
  
  export default Carroussel
  
