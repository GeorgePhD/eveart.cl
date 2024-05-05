import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';
/* import Logo from '../../images/logo.png'; */
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';


const Menu = () => {

    const [language, setLanguage] = useState('English');

    const toggleLanguage = () => {
        setLanguage(language === 'Spanish' ? 'English' : 'Spanish');
    };

    return (
        <>
            <Navbar expand="md" className="bg-body-tertiary mb-3" data-bs-theme="light">
                {/* <img src={Logo} className='logo' alt="Logo EveArt"/> */}
                <h1 className='menu__eve__title'>EvelynAguilar</h1>
                
                <Container fluid>
                    <Navbar.Brand className='navbar__brand' href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">EvelynAguilar</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                            <button className='menu__button' onClick={toggleLanguage}>{language}</button>
                                <Nav.Link className='nav__link' as={Link} to="./home">{language === 'Spanish' ? 'Home' : 'Inicio'}</Nav.Link>
                                <Nav.Link className='nav__link' as={Link} to="./about">{language === 'Spanish' ? 'About' : 'Acerca de mi'}</Nav.Link>
                                <NavDropdown
                                    className='nav__link'
                                    title={language === 'Spanish' ? 'Gallery' : 'Galería'}
                                    id="offcanvasNavbarDropdown"
                                >
                                    <NavDropdown.Item className='nav__link' as={Link} to="./drawings">{language === 'Spanish' ? 'Drawings' : 'Dibujos'}</NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./paintings">{language === 'Spanish' ? 'Paintings' : 'Pinturas'}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./collage">{language === 'Spanish' ? 'Collage' : 'Collage'}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./installations">{language === 'Spanish' ? 'Installations & objects' : 'Instalaciones y objetos'}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./oleopastel">{language === 'Spanish' ? 'Pastel Oleo' : 'Óleo pastel'}
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