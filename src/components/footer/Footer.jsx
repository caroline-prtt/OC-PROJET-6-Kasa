import logoFooter from "../../assets/logo-footer.png"
import Logo from "../logo/Logo";
import "./footer.scss"

function Footer (){
    return (
        <footer className="footer">
            <Logo src={logoFooter} alt="logo kasa blanc" className="footer__logo"/>
            <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;