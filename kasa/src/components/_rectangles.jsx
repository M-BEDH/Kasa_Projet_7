import VectorBas from '../assets/vectorBas.png'
import '../styles/_Rectangles.css'

function handleClick() {
  console.log('CLICK')
}

function Rectangle({ titre }) {
  return (
    <div className='rectangles'>
      <p className='titreRectangles'> {titre} </p>
   <span>  <img src={VectorBas} alt="fleche vers le bas" className="vector" 
        onClick={() => handleClick()} /> </span> 

      </div>
  )
}
export default Rectangle


    
  

