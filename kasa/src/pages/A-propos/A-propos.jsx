import IMG from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png'
import Section1 from "../../components/_section1"
import '../../styles/A-propos.css'
import Rectangle from '../../components/_Rectangles'

function Apropos(){
  
  return (
    <div>
    <Section1 img={IMG} titre={""} />
    
    
      < Rectangle  
      titre ={'Fiabilité'} />
       < Rectangle  
        titre={'Respect'} />
       < Rectangle  
        titre={'Service'} />
       < Rectangle  
      titre ={'Sécurité'} />
   
    </div>
    
    )
  }
  
  export default Apropos