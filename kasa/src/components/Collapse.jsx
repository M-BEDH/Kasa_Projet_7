import { useState } from 'react'
import VectorBas from '../assets/vectorBas.png'
import VectorHaut from '../assets/vectorHaut.png'
import '../styles/_rectangles.css'
import '../styles/Collapse.css'
import Rectangle from './_rectangles'

function Collapse({ texte, titre }) {
  const [isOpen, setIsOpen] = useState(false)
  
 
  return isOpen ? (
    < div className='Collapse' >
      < Rectangle
        titre={titre}
      />
      < button className='ouvert' onClick={() => setIsOpen(false)}>  <img src={VectorHaut} alt="fleche vers le bas" className="vectorhaut" />
      </button>
    
      <p className='texteCollapse'> {texte} </p>
    </div>
  ) : (
    <button className='fermé' onClick={() => setIsOpen(true)} >  <img src={VectorBas} alt="fleche vers le haut" className="vectorbas" />  </button>
  )
}
    
    export default Collapse