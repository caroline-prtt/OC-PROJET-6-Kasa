import { useParams } from "react-router-dom";
import data from "../data.json"

function Accomodation (){
    // Dans le composant Gallery nous avions : 
    // <Link key={item.id} to={`/accomodation/${item.id}`}>
    // Et dans le composant Routes nous avons intégré : 
    // <Route path="/accomodation/:id" element={<Accomodation/>}></Route>
    // On récupère ainsi avec le Hook useParams l'id du logement sélectionné dans l'URL
    const {id} = useParams();

    const logement = data.find(item => item.id === id);

    return (
        <>
            <p>Bienvenue sur la page présentant la fiche d'un logement ayant l'id suivant : {id}</p>
            <img src={logement.cover} alt={logement.title}></img>
            <p>{logement.description}</p>
            <p>{logement.title}</p>
        </>)
}

export default Accomodation;