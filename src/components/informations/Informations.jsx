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
                stars.push(<i key={`star${i}`} className="fa-solid fa-star" style={{ color: '#ff6060'}} ></i>);
            } else {
                stars.push(<i key={`star${i}`} className="fa-solid fa-star" style={{ color: '#e3e3e3' }} ></i>);
            }
        }
    
        return stars;
    }

    const listequipments = props.equipments.map((equipment, index) => (
        <li key={`equipment${index}`}>{equipment}</li>
    ))

    return (
        <div className="informations">

            <div className="informations__header">
                <div className="informations__header__titleandtags">
                    <h2 className="informations__header__titleandtags title">{props.title}</h2>
                    <p className="informations__header__titleandtags location">{props.location}</p>
                    <div className="informations__header__titleandtags tags">
                        {props.tags.map((tag, index) => (
                            <div key={`tag${index}`} className="informations__header__titleandtags tag">{tag}</div>
                        ))}
                    </div>
                </div>
                <div className="informations__header__hostandrating">
                    <div className="informations__header__hostandrating host">
                        <p>{props.hostname}</p>
                        <img src={props.hostpicture} alt={`Portrait de ${props.hostname}`}></img>
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