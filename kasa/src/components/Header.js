import '../styles/Header.css'

import logo from '../assets/vector.png'
import logo1 from '../assets/vector1.png'
import logoK from '../assets/vectorK.png'
import logoS from '../assets/vectorS.png'
import logoA from '../assets/vectorA.png'


function Header(){
const logoKasa = (
    (<div>
        <img src={logoK} alt='lettre K' className='logoK' />
        <img src={logo} alt='kasa' className='logo' />
        <img src={logo1} alt='kasa' className='logo1' />
        <img src={logoS} alt='lettre S' className='logoS' />
        <img src={logoA} alt='lettre A' className='logoA' />
        </div>)
)
return (
    <div className='kasa-header'>
        <h1> {logoKasa}</h1>
        <nav className='nav'>
            <li className="Accueil">Accueil</li>
            <li className="Apropos">A Propos</li> 
        </nav>
    </div>
)};


export default Header;

