import { useState } from "react";
import icone from "../../assets/arrow_icone.png"
import "./collapse.scss"

function Collapse(props){

    // création et initalisation du State pour l'ouverture et fermeture collapse
    // [nomdustate, nomfonctionquimetàjour] = usestate(initialisationdustate)
    const [collapseOpening, setIsOpen] = useState(false);

    //Fonction change l'état du state de false à true / false etc..
    function changeStateCollapse (){
        setIsOpen(!collapseOpening);
    };

    console.log(collapseOpening);

    return(
        <div className="collapse">
            <div className="collapse__header">
                <h2 className="collapse_header__title">{props.title}</h2>
                <img src={icone} onClick={changeStateCollapse} alt="icone flêche pour l'ouverture et la fermeture du collapse"/>
            </div>
            {/* Ajout de la condition selon état affichache ou non de la div */}
            {collapseOpening 
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