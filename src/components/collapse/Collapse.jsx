import { useState } from "react";
import icone from "../../assets/arrow_icone.png"
import "./collapse.scss"

function Collapse(props){

    // création et initalisation du State pour l'ouverture et fermeture collapse
    // [nomdustate, nomfonctionquimetàjour] = usestate(initialisationdustate)
    const [opening, setIsOpen] = useState(false);

    //Fonction change l'état du state de false à true / false etc..
    function changeStateOpening (){
        setIsOpen(!opening);
    };

    console.log(opening);

    //Condition pour nom de la classe de l'icone selon état ouverture
    const buttonClassName = opening ? "collapse__header__button--open" : "collapse__header__button" ;

    return(
        <div className="collapse">
            <div className="collapse__header">
                <h2 className="collapse__header__title">{props.title}</h2>
                <img src={icone} onClick={changeStateOpening} className={`${buttonClassName} rotate`} alt="icone flêche pour l'ouverture et la fermeture du collapse"/>
            </div>
            {/* Ajout de la condition selon état affichache ou non de la div */}
            {opening 
                ? (
                    <div className="collapse__content">
                        <p>{props.content}</p>
                    </div>
                )
                : null
            }
        </div>
    )
}

export default Collapse;