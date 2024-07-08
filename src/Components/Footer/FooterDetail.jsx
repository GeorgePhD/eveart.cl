import FooterIcons from "./FooterIcons";
import { Link } from 'react-router-dom';
const FooterDetail = () => {
    

    return (

        <footer className="footer">
            <div className="footer-content">
                
                <div className="footer-section section1">
                    <h2 className="footer__h2__invisible lato-bold courier-prime-regular">Contacto</h2>
                    {/* <p className="footer__p lato-regular">eveart@evelynaguilarart.com</p> */}
                    <Link to="mailto:eveart@evelynaguilarart.com" className="footer__email__link courier-prime-regular">eveart@evelynaguilarart.com</Link>
                    {/* <p className="lato-regular">Celular: +56 9 7727 4710</p> */}
                </div>

                <div className="footer-section section2">
                    {/* <p className="lato-bold">Síguenos en: </p> */}
                    <FooterIcons />
                <div className="letsdevelopme__container">
                    <p className="p__letsdevel0pme courier-prime-regular">desarrollado por:</p>
                    <a href="https://www.letsdevelopme.com" target="_blank"  className="link__letsdevel0pme courier-prime-regular">letsdevelopme.com</a>
                </div>
                    <div className="social-icons">
                        {/* Include social icons or links here */}
                        {/* Example: <a href="#" className="social-icon">Icon</a> */}
                    </div>
                </div>
                <div className="footer-bottom section3">
                    <p className="lato-bold courier-prime-regular">&copy; 2024, Derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterDetail