import '../styles/_body.css';
import logoEtoileActive from '../assets/vectorEtoileActive.png';
import logoEtoileInactive from '../assets/vectorEtoileInactive.png';
import '../styles/index.css';

function Body({ id, titre, location, tags, name, profilePicture, stars }) {
  const img = (
    <img src={profilePicture} alt="propriètaire" className="propriètaire" />
  );
  const starsActive = stars;
  const starsInactive = 5 - stars;
  let starsNote = [];

  for (let i = 0; i < starsActive; i++) {
    starsNote.push(
      <img src={logoEtoileActive} alt="etoile orange" className="etoile" />
    );
  }

  for (let j = 0; j < starsInactive; j++) {
    starsNote.push(
      <img src={logoEtoileInactive} alt="etoile grise" className="etoile" />
    );
  }

  return (
    <div className="LogementBody" id={id}>
      <div className="lieu">
        <p className="titreLogement"> {titre} </p>
        <span className="location"> {location} </span>
      </div>
      <div className="tagsLogement">
        {tags.map((tags, index) => (
          <div className="tags" key={index.tag}>
            {tags}
          </div>
        ))}
      </div>
      <div className="Host">
        <div className="nom">{name}</div>
        <div className="stars">
          {starsNote}
          <div className="Profil"> {img}</div>
        </div>
      </div>
    </div>
  );
}

export default Body;
