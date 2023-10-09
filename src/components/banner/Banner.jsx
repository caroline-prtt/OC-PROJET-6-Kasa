import "./banner.scss"

function Banner (props){
    return(
        <div className="banner" style={{ backgroundImage: `url(${props.img})` }}>
            <div className="banner banner__opacity">
                <p className="banner__text">{props.text}</p>
            </div>
        </div>
    )
}

export default Banner;