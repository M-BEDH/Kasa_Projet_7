import { useParams } from 'react-router-dom';
import Body from '../../components/_body';
import LogementsList from '../../data/myJson.json';
import Rectangle from '../../components/_rectangles';
import '../../styles/FicheLogement.css';
import Collapse from '../../components/Collapse';
import Carroussel from '../../components/Carroussel';

function FicheLogement() {
  const params = useParams();
  const logement = LogementsList.find((logement) => logement.id === params.id);
  const equipments = logement.equipments;
  const description = logement.description;
  const stars = logement.rating;
  const name = logement.host.name;
  let images = logement.pictures;
  let tags = logement.tags;

  return (
    <div>
      <Carroussel images={images} />
      <Body
        titre={logement.title}
        location={logement.location}
        stars={stars}
        name={name}
        profilePicture={logement.host.picture}
        tags={tags}
      />

      <div className="information">
        <div className="description">
          <Rectangle titre={'Description'} />
          <Collapse titre={'Description'} texte={description} />
        </div>

        <div className="description">
          <Rectangle titre={'Equipements'} />
          <Collapse
            titre={'Equipements'}
            texte={equipments.map((equipments, index) => (
              <div key={index} index={index.equipments}>
                {' '}
                {equipments}{' '}
              </div>
            ))}
          />
        </div>
      </div>
    </div>
  );
}
export default FicheLogement;
