import Cart from "../../gallery/Cart"
import Header from "../../components/Header"
import Section1 from "../../components/_section1"
import LogementsList from "../../data/myJson.json"
import Footer from "../../components/Footer"

function App() {

  return (
    <div>
      <Header />
      <Section1 />
      {LogementsList.map((logement) => (
        <Cart
          key={logement.id}
          id={logement.id}
          image={logement.cover}
          titre={logement.title}
        />
      ))}

      <Footer />
    </div>
  )
}

export default App
