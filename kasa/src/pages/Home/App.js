import Cart from '../../components/Cart';
import Header from '../../components/Header';
import Home  from '../../components/Home';
import LogementsList from '../../data/myJson.json';


function App() {
    return <div>
        
     < Header />
     < Home />
     {LogementsList.map((logement) => 
    < Cart key={logement.id} id={logement.id} 
    image={logement.cover} titre={logement.title} />)}

     </div>
    
}

export default App;
