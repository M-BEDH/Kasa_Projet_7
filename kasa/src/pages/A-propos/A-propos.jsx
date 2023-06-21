import IMG from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png';
import Section1 from '../../components/_section1';
import '../../styles/A-propos.css';
import Rectangle from '../../components/_rectangles';
import Collapse from '../../components/Collapse';

function Apropos() {
  return (
    <div className="pagePropos">
      <Section1 img={IMG} titre={' '} />

      <div className="apropos">
        <Rectangle titre={'Fiabilité'} />
        <Collapse
          titre={'Fiabilité'}
          texte={
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes. '
          }
        />

        <Rectangle titre={'Respect'} />
        <Collapse
          titre={'Respect'}
          texte={
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          }
        />

        <Rectangle titre={'Service'} />
        <Collapse
          titre={'Service'}
          texte={
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
        />

        <Rectangle titre={'Sécurité'} />
        <Collapse
          titre={'Sécurité'}
          texte={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
    </div>
  );
}

export default Apropos;
