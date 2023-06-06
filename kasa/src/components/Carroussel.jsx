import '../styles/Carroussel.css'
import VectorG from '../assets/vectorGauche.png'
import VectorD from '../assets/vectorDroite.png'

function handelClick()
{
console.log ('je change de photo')
}

function Carroussel (images) {
  
  return(
    <div className='carroussel'>
      <div className='vectorG' onClick={handelClick}>
        
         <img src={VectorG} alt="fleche precedente" className="vectorGauche" />
      </div>

      <img src={images} alt="Photos de l'appartement" className="appt" />

      <div className='verctorD' onClick={handelClick}>
        <img src={VectorD} alt="fleche suivante" className="vectorDroite" />
      </div>
    </div>
    )
  }
  
  
export default Carroussel

