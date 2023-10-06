import { Link } from "react-router-dom";
import logoHeader from "../../assets/logo-header.png"
import Logo from "../logo/Logo";
import "../header/header.scss"

function Header (){
    return (
        <header className="header">
            <nav className="navbar">
                <Logo src={logoHeader} alt="logo kasa rouge" className="navbar__logo"/>
                <div>
                    <Link to="/" className="navbar__link">Accueil</Link>
                    <Link to="/about" className="navbar__link">A Propos</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;