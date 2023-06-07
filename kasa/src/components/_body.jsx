import '../styles/_body.css'
import Carroussel from './Carroussel'
import LogementsList from '../data/myJson.json'

function Body({ id, titre, location, pictures, rating, host, name, picture }) {
   
  const logement = LogementsList.find(logement => logement.id)
  const tags = [logement.tags]
  const Host = (logement.host).picture
  const Nom = (logement.host).name
  console.log('Body  :' + Nom)
  // Parcourir le tableau et afficher toutes les valeurs
  for (var i = 0; i < tags.length; i++)
    console.log(tags[i])
  
  return (
    <div className="LogementBody" id={id}>
      < Carroussel
        image={pictures}
      />
    
      <div className='lieu'>
        <p className="titreLogement"> {titre} </p>
        <span className='location'> {location} </span>
      </div>
      <div className='info'>
        <p className='tags'> {tags}</p>
    
      </div>
      <div className='Host'>
        <p className='nom'>
          {Nom} </p>
        {Host}
        {rating}
    
      </div>
    </div>
  )
}
  export default Body
  

