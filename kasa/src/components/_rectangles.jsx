import VectorBas from '../assets/vectorBas.png'
import '../styles/_Rectangles.css'


function Rectangle({ titre }) {
  
  return (
    <div className='rectangles'>
     <p className='titreRectangles'> {titre} </p>
      <img src={VectorBas} alt="fleche vers le bas" className="vector" />
      </div>
  )
}
export default Rectangle
    
