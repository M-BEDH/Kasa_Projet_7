import Section1 from '../../components/_section1'
import Gallery from '../../components/Gallery'
import IMG from '../../assets/IMG.png'
import '../../styles/Cart.css'

function Home() {
  return (
    <div>
    <Section1 img={IMG} titre={'Chez vous, partout et ailleurs!'} />
    <div className='gallery'>  <Gallery /> </div>
    </div>
    )
  }
  export default Home
