import '../styles/Carroussel.css'
import VectorG from '../assets/vectorGauche.png'
import VectorD from '../assets/vectorDroite.png'
import { useState } from 'react'

function handelClick() {

}

function Carroussel(images) {
  const img = <img src={images[0]} alt="interieur de l\'sappartement" className="apptInt" />
  console.log('Carroussel :' + images)
  
  const [imageLgement, setImageLogement] = useState(images[0])

  return (
    <div className='carroussel'>
    <div className='vectorG' onClick={() => (setImageLogement -1)}>
    <img src={VectorG} alt="fleche precedente" className="vectorGauche" />
    </div>
    
    <div> {img} {imageLgement} </div>
    
    <div className='verctorD' onClick={() => handelClick( setImageLogement +1)}>
    <img src={VectorD} alt="fleche suivante" className="vectorDroite" />
    </div>
    </div>
    )
  }
  
  export default Carroussel
  
