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
    
    />
    < Body 
    
    id={logement.id}
    titre={logement.title}  
    location={logement.location}  
    tags={logement.tags}
    equipements={logement.equipments}
    description={logement.description}
    />
    
    <div className='information'>
    
    <p className='description'>
    < Rectangle  
    
    titre={'Description'}
    
    /> </p>
    
    <p className='description' >
    < Rectangle
    titre={'Equipements'}
    
    /> </p>
    </div>
    
    </div>
    )
  }
  
  export default FicheLogement
  

  