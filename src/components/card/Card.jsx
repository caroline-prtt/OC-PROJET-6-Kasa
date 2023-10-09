import "./card.scss"

function Card (props){
    return(
        <div className="card" style={{ backgroundImage: `url(${props.cover})` }}>
            <div className="card card__overlay">
                <h2 className="card__title">{props.title}</h2>
            </div>
        </div>
    )
}

export default Card;