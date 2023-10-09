import { Link } from "react-router-dom";
import Card from "../card/Card"
import data from "../../data.json"
import "./gallery.scss"

function Gallery (){
    return(
        <div className="gallery">
            {data.map((item) =>(
                <Link key={item.id} to={`/accomodation/${item.id}`}>
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