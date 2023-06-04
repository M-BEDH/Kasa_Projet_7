import { useState } from 'react'
import VectorBas from '../assets/vectorBas.png'
import VectorHaut from '../assets/vectorHaut.png'
import '../styles/_Rectangles.css'
import '../styles/Collapse.css'


function Collapse({ texte }) {
   const [isOpen, setIsOpen] = useState(false)

  return isOpen ?(
    < div className='Collapse' >
       < button className='ouvert' onClick={() => setIsOpen(false)}>  <img src={VectorHaut} alt="fleche vers le bas" className="vectorhaut" />
        </button>
      <p className= 'texteCollapse'>
  {'La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}
    </p>
      </div>
  ) : (
      <button className='fermé' onClick={() => setIsOpen(true)} >  <img src={VectorBas} alt="fleche vers le haut" className="vectorbas" />  </button> 
  )
} 
  
export default Collapse