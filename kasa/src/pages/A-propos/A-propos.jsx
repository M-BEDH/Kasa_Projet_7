import IMG from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png'
import Section1 from "../../components/_section1"
import '../../styles/A-propos.css'
import Rectangle from '../../components/_Rectangles'
import Collapse from '../../components/Collapse'

function Apropos(){
  
  return (
    <div>
    <Section1 img={IMG} titre={""} />
    
    <div className='apropos'>
    < Rectangle  
    titre={'Fiabilité'} />
        < Collapse
        texte ={''}
        />
    < Rectangle  
    titre={'Respect'} />
    < Collapse />
    < Rectangle  
    titre={'Service'} />
    < Rectangle  
    titre ={'Sécurité'} />
    </div>
    </div>
    
    )
  }
  
  export default Apropos          