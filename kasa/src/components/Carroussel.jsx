import '../styles/Carroussel.css'
import LogementsList from '../data/myJson.json'


function Carroussel () {
  const logement = LogementsList.find(logement => logement.id) 
  let imagesLogement = (logement.id).pictures
  const images = imagesLogement
  
  return (() =>
    <div className='carroussel'>
     {images}
    </div>
    )
  }
  
  export default Carroussel