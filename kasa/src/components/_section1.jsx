import '../styles/_section1.css'

function Section1({ img, titre }) {
  return (
    <div className="background">
      <h2 className="section1">
        {' '}
        <img src={img} alt="paysage bord de mer" className="section1 img" />
        <p className="text">{titre}</p>{' '}
      </h2>
    </div>
  )
}

export default Section1
