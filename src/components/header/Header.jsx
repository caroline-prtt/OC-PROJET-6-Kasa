import { Link } from "react-router-dom";

function Header (){
    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header;