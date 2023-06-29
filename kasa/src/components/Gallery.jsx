import Cart from './Cart';
import LogementsList from '../data/logements.json';
import { NavLink } from 'react-router-dom';
import '../styles/Gallery.css';

function Gallery() {
  return LogementsList.map((logement) => (
    <NavLink key={logement.id} to={'/logement/' + logement.id + '/#'}>
      <div className="Gallery">
        <Cart
          key={logement.id}
          id={logement.id}
          image={logement.cover}
          titre={logement.title}
        />
      </div>
    </NavLink>
  ));
}
export default Gallery;
