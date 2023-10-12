import { useState } from "react";
import icone from "../../assets/arrow_icone.png"
import "./collapse.scss"

function Collapse(props){

    // création et initalisation du State pour l'ouverture et fermeture collapse
    // [nomdustate, nomfonctionquimetàjour] = usestate(initialisationdustate)
    const [open, setOpen] = useState(false);

    //Fonction change l'état du state de false à true / false etc..
    function changeStateOpen (){
        setOpen(!open);
    };

    //ICONE : Condition pour nom de la classe de l'icone selon état ouverture
    const buttonClassName = open ? "collapse__header__button--open" : "collapse__header__button" ;

    //COLLAPSE CONTENT : condition pour classname
    const collapseContentClassName = open ? "collapse__content" : "collapse__content--closed"

    return(
        <div className="collapse">
            <div className="collapse__header">
                <h3 className="collapse__header__title">{props.title}</h3>
                <img src={icone} onClick={changeStateOpen} className={buttonClassName} alt="icone flêche pour l'ouverture et la fermeture du collapse"/>
            </div>
            <div className={collapseContentClassName}>
                <p>{props.content}</p>
            </div> 
        </div>
    )
}

export default Collapse;