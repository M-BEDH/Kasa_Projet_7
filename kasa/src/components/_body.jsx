import '../styles/Body.css'

function Body({ id, titre, description, equipements, location, tags}) {
  return  (
    <div className="Logement" id={id}>
      <p className="titreLogement"> {titre} 
        <span className='location'> {location} </span>
        </p>
      <div className='informations'>
        {description}
        {equipements}
      </div>
      <p className='tags'> {tags} </p>  <p className='tags'> {tags}</p>  <p className='tags'> {tags} </p>
    </div>
    )
  } 
  export default Body


