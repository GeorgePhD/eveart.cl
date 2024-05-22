import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';
import DarkModeIcon from '../../images/dark_mode_icon.png'
/* import Logo from '../../images/logo.png'; */
import { Link, Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';


const Menu = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState('English');


    const toggleOffcanvas = () => {
        if(isSmallScreen) {
            setShowOffcanvas(!showOffcanvas);
        }
    };

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []); // Empty dependency array for effect to run once

    

    const toggleLanguage = () => {
        setLanguage(language === 'Spanish' ? 'English' : 'Spanish');
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    return (
        <>
            <Navbar expand="md" className="bg-body-tertiary mb-3" data-bs-theme="light">
                {/* <img src={Logo} className='logo' alt="Logo EveArt"/> */}
                {/* <h1 className='menu__eve__title'>EvelynAguilar</h1> */}
                
                <Container fluid>
                    <Navbar.Brand className='navbar__brand' href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleOffcanvas} />
                    <Navbar.Offcanvas
                    show={showOffcanvas}
                    onHide={() => setShowOffcanvas(false)} // Hide menu on close button click
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel" className='offcanvas__title'>EvelynAguilar</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <div className="button__container">
                                    <button className='menu__button' onClick={toggleLanguage}>{language}</button>
                                    <img src={DarkModeIcon} className='dark__mode__icon' alt="dark mode icon" onClick={toggleTheme}/>
                                </div>
                                <Nav.Link className='nav__link' as={Link} to="./home" onClick={toggleOffcanvas}>{language === 'Spanish' ? 'Home' : 'Inicio'}</Nav.Link>
                                <Nav.Link className='nav__link' as={Link} to="./about" onClick={toggleOffcanvas}>{language === 'Spanish' ? 'About' : 'Acerca de mí'}</Nav.Link>
                                <NavDropdown
                                    className='nav__link'
                                    title={language === 'Spanish' ? 'Gallery' : 'Galería'}
                                    id="offcanvasNavbarDropdown"
                                >
                                    <NavDropdown.Item className='nav__link' as={Link} to="./drawings" onClick={toggleOffcanvas}>{language === 'Spanish' ? 'Drawings' : 'Dibujos'}</NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./paintings" onClick={toggleOffcanvas}>{language === 'Spanish' ? 'Paintings' : 'Pinturas'}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./collage" onClick={toggleOffcanvas}>{language === 'Spanish' ? 'Collage' : 'Collage'}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./installations" onClick={toggleOffcanvas}>{language === 'Spanish' ? 'Installations & objects' : 'Instalaciones y objetos'}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./oleopastel" onClick={toggleOffcanvas}>{language === 'Spanish' ? 'Pastel Oleo' : 'Óleo pastel'}
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
}
export default Menu