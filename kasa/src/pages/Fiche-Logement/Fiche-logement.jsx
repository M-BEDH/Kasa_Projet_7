 import {useParams} from 'react-router-dom'
 import Body from '../../components/_body'
 import LogementsList from '../../data/myJson.json'
 import Rectangle from '../../components/_rectangles'
 import '../../styles/FicheLogement.css'
 import Collapse from '../../components/Collapse'
 
function FicheLogement() {
        const params = useParams()
        const logement = LogementsList.find(logement => logement.id === params.id)
        const equipements = (logement.equipments)
        const description = (logement.description)
        
        return (
                <div>
                
                        < Body
                                titre={logement.title}
                                location={logement.location}
                                rate={logement.rating}
                                Host={logement.host}
                        />
                
                        <div className='information'>
                                <div className='description'>
                                        < Rectangle
                                                titre={'Description'} />
                                        < Collapse
                                                titre={'Description'}
                                                texte={description} />
                                </div>
                
                                <div className='description'>
                                        < Rectangle
                                                titre={'Equipements'} />
                                        < Collapse
                                                titre={'Equipements'}
                                                texte={equipements} />
                                </div>
                        </div>
                
   </div>
        )
}
        export default FicheLogement
        
        
