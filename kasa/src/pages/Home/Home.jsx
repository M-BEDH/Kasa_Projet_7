import Header from '../../components/Header'
import Section1 from '../../components/_section1'
import Gallery from '../../components/Gallery'
import Footer from '../../components/Footer'
import IMG from '../../assets/IMG.png'
import '../../styles/Cart.css'

function Home() {
  return (
    <div>
      <Header />
      <Section1 img={IMG} titre={'Chez vous partout et ailleurs!'} />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home
