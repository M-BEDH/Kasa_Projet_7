import '../styles/Cart.css'

function Cart({ id, image, titre }) {
  const img = <img src={image} alt="appartement" className="appt" />
  return (
    <div className="cartLogement" id={id}>
      <div> {img} </div>
      <p className="titre"> {titre}</p>
    </div>
  )
}

export default Cart
