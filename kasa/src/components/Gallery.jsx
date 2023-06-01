import Cart from './Cart'
import LogementsList from '../data/myJson.json'
import { NavLink } from 'react-router-dom'


function Gallery() {

  return LogementsList.map((logement) => (
      <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}>
    <Cart
    key={logement.id}
    id={logement.id}
    image={logement.cover}
    titre={logement.title}
      /> 
      </NavLink>
    ))
  }
   export default Gallery
