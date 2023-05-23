import IMG from '../assets/IMG.png'
import '../styles/Home.css'


function Home(){
    return (
        <div className='background'> 
        <h2 className='section1'> <img src = {IMG} alt='paysage bord de mer' className='section1 img'/>
        <p className='text'>Chez vous, partout et ailleurs</p> </h2>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        </style>
        </div>
       
        )
    }
    






export default Home