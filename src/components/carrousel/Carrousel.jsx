import { useState } from 'react';
import buttonPrev from "../../assets/button-previous.png"
import buttonNext from "../../assets/button-next.png"
import './carrousel.scss';

function Carrousel(props) {

    //Tableau de toutes les photos du logement sélectionné
    const images = props.images;

    //State de l'id de l'image visualisée dans le carroussel (NB : tableau donc premier id à zéro)
    const [imageId, setimageId] = useState(0);

    const nextImage = () => {
        if (imageId === images.length - 1) {
            // Si nous sommes déjà à la dernière image, revenir à la première
            setimageId(0);
        } else {
            // Sinon, simplement passer à l'image suivante
            setimageId(imageId + 1);
        }
    };

    const prevImage = () => {
        if (imageId === 0) {
          // Si nous sommes déjà à la première image, revenir à la dernière
          setimageId(images.length - 1);
        } else {
          // Sinon, simplement aller à l'image précédente
          setimageId(imageId - 1);
        }
      };

      //constante qui sera utilisée pour savoir s'il y a plusieurs photos
      const hasMultipleImages = images.length > 1;

  return (
        <div className="carrousel">
            <div className="carrousel__image">
                <img src={images[imageId]} alt={`Photos de l'appartement ${props.title}`} />
            </div>
            {/* condition si plusieurs images alors les boutons et le conteur apparaissent */}
            {hasMultipleImages ? (
            <> 
            <div className="carrousel__controls buttons">
                <img className="carrousel__controls__buttons" src={buttonPrev} onClick={prevImage} alt="bouton carrousel previous"></img>
                <img className="carrousel__controls__buttons" src={buttonNext} onClick={nextImage} alt="bouton carrousel next" ></img>
            </div>
            <div className="carrousel__controls counter">
                <span>{`${imageId + 1}/${images.length}`}</span>
            </div>
            </>
            )
            : null}
        </div>
    );
}

export default Carrousel;
