import '../styles/_section1.css'

function Section1({ img, titre }) {
  return (
    <div className="background">
    <h2 className="section1">
    {' '}
    <img src={img} alt="paysage bord de mer" className="section1 img" />
    <p className="text">{titre}</p>{' '}
    </h2>
    <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
    </style>
    </div>
    )
  }
  
  export default Section1
