import '../styles/Footer.css'

import logo from '../assets/vector.png'
import logo1 from '../assets/vector1.png'
import logoK from '../assets/vectorK.png'
import logoS from '../assets/vectorS.png'
import logoA from '../assets/vectorA.png'
import IMG from '../assets/logo_footer.png'

function Footer() {
  const logoKasa = (
    <div className='kasa-Footer'>
    <img src={logoK} alt="lettre K" className="logoK-footer" />
    <img src={logo} alt="kasa" className="logo-footer" />
    <img src={logo1} alt="kasa" className="logo1-footer" />
    <img src={logoS} alt="lettre S" className="logoS-footer" />
    <img src={logoA} alt="lettre A" className="logoA-footer" />
    </div>
    )
    return (
      <div className="kasa-footer">
      <h1> {logoKasa}</h1>
      <img src={IMG} alt="all right reserved kasa" className="texte_footer" />
      </div>
      )
    }
    
    export default Footer
