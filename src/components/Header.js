import logo from '../images/logo.png';
import '../components/Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <img src={logo} id="logo" alt="logo_Kasa" />
            <nav>
                    <Link to='/'>Accueil</Link>
                    <Link to='/apropos'>A propos</Link>
            </nav>
        </header>
    )
}

export default Header