import Collapse from "../collapse/Collapse";
import "./informations.scss"

function Informations (props){
    
    // On stocke la note
    const rating = props.rating;

    // Fonction pour afficher les étoiles de notation
    const ratingStars = (rating) => {

        const stars = [];
        const maxStars = 5;

        const numericRating = parseInt(rating, 10); // Convertir la valeur de la note en nombre entier decimal
    
        for (let i = 1; i <= maxStars; i++) {
            if (i <= numericRating) {
                stars.push(<i key={i} className="fa-solid fa-star" style={{ color: '#ff6060' }} ></i>);
            } else {
                stars.push(<i key={i} className="fa-solid fa-star" style={{ color: '#e3e3e3' }} ></i>);
            }
        }
    
        return stars;
    }

    const listequipments = props.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
    ))

    return (
        <div className="informations">

            <div className="informations__header">
                <div className="informations__header__titleandtags">
                    <h2 className="informations__header__titleandtags title">{props.title}</h2>
                    <p className="informations__header__titleandtags location">{props.location}</p>
                    <div className="informations__header__titleandtags tags">
                        {props.tags.map((word) => (
                            <div className="informations__header__titleandtags tag">{word}</div>
                        ))}
                    </div>
                </div>
                <div className="informations__header__hostandrating">
                    <div className="informations__header__hostandrating host">
                        <img src={props.hostpicture} alt={`Portrait de ${props.hostname}`}></img>
                        <p>{props.hostname}</p>
                    </div>
                    <div className="informations__header__hostandrating rating">
                        {ratingStars(rating)}
                    </div>
                </div>
            </div>

            <div className="informations__collapses">
                <Collapse title="Description" content={props.description}/>
                <Collapse title="Équipements" content={listequipments}/>
            </div>

        </div>
    )   
}

export default Informations;