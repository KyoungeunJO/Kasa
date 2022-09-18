import logo from '../images/logo_white.png';
import './Footer.css';


function Footer() {
    return (
        <footer>
            <img src={logo} id="logo_footer" alt="logo_Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer