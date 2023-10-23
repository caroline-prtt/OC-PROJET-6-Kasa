import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logo-header.png"
import Logo from "../logo/Logo";
import "../header/header.scss"

function Header (){
    return (
        <header className="header">
            <nav className="navbar">
                <Logo src={logoHeader} alt="logo kasa rouge" className="navbar__logo"/>
                <div>
                    <NavLink exact="true" to="/" className="navbar__link" activeclassname="active">Accueil</NavLink>
                    <NavLink to="/about" className="navbar__link" activeclassname="active">A Propos</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;