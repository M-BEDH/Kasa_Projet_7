import '../styles/_body.css'
import logoEtoilePleine from '../assets/vectorEtoilePleine.png'
import logoEtoileVide from '../assets/vectorEtoileVide.png'


function Body({ id, titre, location, tags, name, profilePicture, stars }) {
const img = <img src={profilePicture} alt="propriètaire" className="propriètaire" />
  
const etoilesPleine = stars
const etoilesVide = 5 - stars
let starsNote = []

  for (let i = 0; i < etoilesPleine; i++) {
    starsNote.push (<img src={logoEtoilePleine} alt="etoile orange" className="etoile" />)
  }
  
  for (let j = 0; j < etoilesVide; j++) {
    starsNote.push (<img src={logoEtoileVide} alt="etoile grise" className="etoile" />)
  }  

    
    return (
      <div className="LogementBody" id={id}>
      
      <div className='lieu'>
      <p className="titreLogement"> {titre} </p>
      <span className='location'> {location} </span>
      </div>
      
      <div className='info'>
      <div className='TAGS'>
      {tags.map((tags, index) => (
        <div className='tags' key={index}>
        <p index={index.tags}>{tags} </p>
        </div>
        ))}
        </div>
        </div>
        
        <div className='Host'>
        <div className='nom'>
        {name} </div>
          <div className='stars'>
            
       {starsNote} 
        
        </div>
        <div> {img} </div>
        </div>
        
        </div>
        )
      }
    
    export default Body
    
    
