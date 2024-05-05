import FooterIcons from "./FooterIcons";

const FooterDetail = () => {

    return (

        <footer className="footer">
            <div className="footer-content">
                
                <div className="footer-section section1">
                    <h2 className="footer__h2__invisible lato-bold">Contacto</h2>
                    <p className="lato-regular">eveart@evelynaguilarart.com</p>
                    {/* <p className="lato-regular">Celular: +56 9 7727 4710</p> */}
                </div>

                <div className="footer-section section2">
                    {/* <p className="lato-bold">Síguenos en: </p> */}
                    <FooterIcons />
                    <div className="social-icons">
                        {/* Include social icons or links here */}
                        {/* Example: <a href="#" className="social-icon">Icon</a> */}
                        
                    </div>
                </div>

                <div className="footer-bottom section3">
                <p className="lato-bold">&copy; 2024 EveArt, Derechos reservados.</p>
            </div>
            </div>

            
        </footer>
    )
}

export default FooterDetail