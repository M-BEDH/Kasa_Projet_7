import '../styles/Error.css'

function Erreur404() {
  return (
    <div>
    <div className="Page404"> 404 </div>
    <p className="oups">
    {' '}
    Oups! La page que vous demander n'existe pas{' '}
    </p>{' '}
    <p className="retour"> <a href="/"> Retourner sur la page d'accueil </a> </p> 
    </div>
    )
  }
  
  export default Erreur404
