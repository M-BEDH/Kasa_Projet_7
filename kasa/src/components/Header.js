import '../styles/Header.css'

import logo from '../assets/vector.png'
import logo1 from '../assets/vector1.png'
import logoK from '../assets/vectorK.png'
import logoS from '../assets/vectorS.png'
import logoA from '../assets/vectorA.png'

function Header(){
const logoKasa = (
    (<div>
        <img src={logoK} alt='lettre K' className='kasa-logo' />
        <img src={logo} alt='kasa' className='kasa-logo' />
        <img src={logo1} alt='kasa' className='kasa-logo1' />
        <img src={logoS} alt='lettre S' className='kasa-logo' />
        <img src={logoA} alt='lettre A' className='kasa-logo' />
        </div>)
)
return (
    <div className='kasa-banner'>
        <h1> {logoKasa}</h1>
        <nav className='nav'>
            <li>Accueil</li>
            <li>A Propos</li> 
        </nav>
    </div>
)};


export default Header