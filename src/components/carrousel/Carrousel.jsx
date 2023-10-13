import { useState } from 'react';
import buttonPrev from "../../assets/button-previous.png"
import buttonNext from "../../assets/button-next.png"
import './carrousel.scss';

function Carrousel(props) {

    //Tableau de toutes les photos du logement sélectionné
    const images = props.images;

    //State de l'id de l'image visualisée dans le carroussel (NB : tableau donc premier id à zéro)
    const [imageId, setimageId] = useState(0);

    //fonction pour l'animation des images lors du changement de photo
    const animationImageTransition = () => {
        
        const imageElement = document.querySelector(".carrousel__image img");
    
        if (imageElement) {
            // Définit une transition pour les propriétés "transform" et "opacity"
            imageElement.style.transition = "transform 300ms, opacity 300ms";
            // Réduit progressivement l'opacité de l'image pour créer un effet de fondu en laissant 15 % d'opacité.
            imageElement.style.opacity = 0.85;
            // Réduit la taille de l'image à 97 % de sa taille d'origine pour créer un effet de réduction vers le centre.
            imageElement.style.transform = "scale(0.97)";

            // Après un court délai (200 millisecondes), réinitialisez les propriétés.
            setTimeout(() => {
                // Désactive temporairement la transition pour réinitialiser les propriétés sans animation.
                imageElement.style.transition = "none";
                // Rétablit complètement l'opacité de l'image (1) et réinitialise la position (aucun déplacement ni réduction).
                imageElement.style.opacity = 1;
                imageElement.style.transform = "none";
                // Réactive la transition pour les futurs changements d'image.
                // (Désactive temporairement puis réactive pour éviter que l'animation ne se déclenche immédiatement)
                setTimeout(() => {
                    imageElement.style.transition = "transform 300ms, opacity 300ms";
                }, 0);
            }, 200); // Ce délai détermine la durée pendant laquelle l'animation du fondu vers le centre se produit.
        }
    }

    const nextImage = () => {
        if (imageId === images.length - 1) {
            // Si nous sommes déjà à la dernière image, revenir à la première
            setimageId(0);
        } else {
            // Sinon, simplement passer à l'image suivante
            setimageId(imageId + 1);
        }

        animationImageTransition()
    };

    const prevImage = () => {
        if (imageId === 0) {
          // Si nous sommes déjà à la première image, revenir à la dernière
          setimageId(images.length - 1);
        } else {
          // Sinon, simplement aller à l'image précédente
          setimageId(imageId - 1);
        }
        animationImageTransition()
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
