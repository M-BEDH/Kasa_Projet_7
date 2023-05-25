import Cart from './Cart'
import LogementsList from '../../data/myJson.json'

//function Gallery(Cart) {
function Gallery() {
  return LogementsList.map((logement) => (
    <Cart
      key={logement.id}
      id={logement.id}
      image={logement.cover}
      titre={logement.title}
    />
  ))
}

export default Gallery
