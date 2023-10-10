import { Link } from "react-router-dom";
import Card from "../card/Card"
import data from "../../data.json"
import "./gallery.scss"

function Gallery (){

    //Fonction qui permet de renvoyer tout de suite en haut de la page de description du logement
    // Autrement on reste au même niveau de scroll de l'écran, ce qui pose problème 
    // si on cliqque sur la dernière card par exemple - rendu pas optimal
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

    return(
        <div className="gallery">
            {data.map((item) =>(
                <Link key={item.id} to={`/accomodation/${item.id}`} onClick={scrollToTop} className="gallery__link"> 
                    <Card
                        cover={item.cover}
                        altImage={item.description}
                        title={item.title}
                    />
                </Link>
            ))              
            }
        </div>
    )
}

export default Gallery;