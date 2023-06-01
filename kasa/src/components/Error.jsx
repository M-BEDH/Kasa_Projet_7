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
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
      </style>
    </div>
  )
}

export default Erreur404
