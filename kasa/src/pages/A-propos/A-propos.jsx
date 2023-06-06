import IMG from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png'
import Section1 from "../../components/_section1"
import '../../styles/A-propos.css'
import Rectangle from '../../components/_rectangles'
import Collapse from '../../components/Collapse'

function Apropos(){
  
  return (
    <div>
    <Section1 img={IMG} titre={' '} />
    
      <div className='apropos'>
      
    < Rectangle  
          titre={'Fiabilité'} />
    < Collapse
            texte={' '} />
    
    < Rectangle  
    titre={'Respect'} />
    < Collapse
    texte={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}
        />
        
    < Rectangle  
    titre={'Service'} />
    < Collapse 
    texte={' '} 
        />
        
    < Rectangle  
    titre={'Sécurité'} />
    < Collapse 
    texte={' '}
    />
    </div>
    </div>
    
    )
  }
  
  export default Apropos          