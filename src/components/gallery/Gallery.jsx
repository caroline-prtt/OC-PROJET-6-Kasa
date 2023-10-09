import Card from "../card/Card"
import data from "../../data.json"
import "./gallery.scss"

function Gallery (){
    return(
        <div className="gallery">
            {data.map((item) =>(
                <Card
                    key={item.id}
                    cover={item.cover}
                    altImage={item.description}
                    title={item.title}
                />
            ))              
            }
        </div>
    )
}

export default Gallery;