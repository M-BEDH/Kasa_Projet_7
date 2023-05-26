import IMG from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png'
import Section1 from "../components/_section1"
import VectorBas from '../assets/vectorBas.png'
import VectorHaut from '../assets/vectorHaut.png'
import '../styles/A-propos.css'

function Rectangle() {
  
  return (
    <div>
    <Section1 img={IMG} titre={""} />
    
    <div className='Fiabilite'> <p>Fiabilité </p>
   <span> <img src={VectorBas} alt="fleche vers le bas" className="vector" /></span>
      </div>
    <div className='Respect'> <p> Respect </p>
          <span><img src={VectorHaut} alt="fleche vers le haut" className="vector" /></span>
      </div>

      <div className='ouvert'> <p className='texte'>  La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement <br></br>
        discriminatoire ou de perturbation du voisinage entraînera une exclusion de <br></br>
        notre plateforme. </p>  </div>
      
    <div className='Service '> <p> Service </p>
   <span> <img src={VectorBas} alt="fleche vers le haut" className="vector" /></span>
    </div>
    <div className='Securite'> <p> Sécurité </p>
  <span> <img src={VectorBas} alt="fleche vers le bas" className="vector" /></span>
    </div>
    </div>
    )
}
    export default Rectangle