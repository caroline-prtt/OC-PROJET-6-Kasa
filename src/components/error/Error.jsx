import { Link } from "react-router-dom"
import "./error.scss"

function Error(){
    return(
        <div className="pageError">
            <h2 className="pageError__title">404</h2>
            <p className="pageError__message">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="pageError__link">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error;
