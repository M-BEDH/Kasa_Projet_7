import {useParams} from 'react-router-dom'
import Carroussel from '../../components/Carroussel'
import Body from '../../components/_body'
import LogementsList from '../../data/myJson.json'
import Rectangle from '../../components/_Rectangles'
import '../../styles/FicheLogement.css'

function FicheLogement() {
  const params = useParams()

  const logement = LogementsList.find(logement => logement.id === params.id)
  return (
    <div>
      < Carroussel
      images={logement.pictures}
    />
    < Body 
    key={logement.id}
    id={logement.id}
    titre={logement.title}
    description={logement.description}
    equipements={logement.equipments}  
    location={logement.location} 
    tags={logement.tags[0]}    
      />
      <div className='information'>
        <p className='description'>
       < Rectangle  
          titre={'Description'} /> </p>
        <p className='equipements'>
       < Rectangle  
          titre={'Equipements'} /> </p>
        </div>
    
    </div>
    )
  }
  
  export default FicheLogement
  

  