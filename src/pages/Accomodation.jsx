import { useParams } from "react-router-dom";
import data from "../data.json"
import PageNotFound from "./PageNotFound"
import Carrousel from "../components/carrousel/Carrousel"

function Accomodation (){
    // Dans le composant Gallery nous avions : 
    // <Link key={item.id} to={`/accomodation/${item.id}`}>
    // Et dans le composant Routes nous avons intégré : 
    // <Route path="/accomodation/:id" element={<Accomodation/>}></Route>
    // On récupère ainsi avec le Hook useParams l'id du logement sélectionné dans l'URL
    const {id} = useParams();

    const logement = data.find(item => item.id === id);

    if (!logement) {
        // Si aucun logement avec cet ID n'est trouvé, affiche la page d'erreur 404
        return <PageNotFound/>;
      }

    return (
        <main>
            <div className="ficheLogement">
                <section className="ficheLogement__carrousel">
                    <Carrousel images={logement.pictures} title={logement.title}/>
               </section>
            </div>
            
            {/*  */}
            <p>Bienvenue sur la page présentant la fiche d'un logement ayant l'id suivant : {id}</p>
            <p>{logement.description}</p>
            <p>{logement.title}</p>
        </main>)
}

export default Accomodation;