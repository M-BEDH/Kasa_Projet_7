import '../styles/_body.css'

function Body({ id, titre, location, tags, name, profilePicture, stars }) {
  console.log('Body :' + stars)
  const img = <img src={profilePicture} alt="propriètaire" className="propriètaire" />

  return (
    <div className="LogementBody" id={id}>
     
      <div className='lieu'>
        <p className="titreLogement"> {titre} </p>
        <span className='location'> {location} </span>
      </div>
      <div className='info'>
        <div className='tags'>
         {tags}
           </div>
    
      </div>
      <div className='Host'>
        <p className='nom'>
          {name} </p>
        
        <div className='stars'>
          {stars}
        </div>
            <div> {img} </div> 
      </div>
    </div>
  )
}
  export default Body
  

