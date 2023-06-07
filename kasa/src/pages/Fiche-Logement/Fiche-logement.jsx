import {useParams} from 'react-router-dom'
import Body from '../../components/_body'
import LogementsList from '../../data/myJson.json'
import Rectangle from '../../components/_rectangles'
import '../../styles/FicheLogement.css'
import Collapse from '../../components/Collapse'
import Carroussel from '../../components/Carroussel'

 
 function FicheLogement() {
        const params = useParams()
        const logement = LogementsList.find(logement => logement.id === params.id)
        const equipements = (logement.equipments)
        const description = (logement.description)
        const images = (logement.pictures) 
        for (let i = 0; i < images.length; i++)
        console.log('fiche logement images :'+ images[i])
        const stars = (logement.rating)
        const name = (logement.host).name
        const tags =  (logement.tags)
        for (let j = 0; j < tags.length; j++)
        console.log( 'Fiche logement tags : ' +tags[j])
        
        return (
                <div>
                < Carroussel
                pictures={logement.pictures[0]}
                />
                
                < Body
                titre={logement.title}
                location={logement.location}
                stars={stars}
                name={name}
                picture={logement.host.picture}              
                tags={tags[0]}
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
        
        
