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

    const [language, setLanguage] = useState('spanish');

    const toggleLanguage = () => {
        setLanguage(language === 'spanish' ? 'english' : 'spanish');
    };

    return (
        <>
            <Navbar expand="md" className="bg-body-tertiary mb-3" data-bs-theme="light">
                {/* <img src={Logo} className='logo' alt="Logo EveArt"/> */}
                <h4 className='menu__eve'>EvelynAguilar</h4>
                
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
                                <Nav.Link className='nav__link' as={Link} to="./home">{language === 'spanish' ? 'Home' : 'Inicio'}</Nav.Link>
                                <Nav.Link className='nav__link' as={Link} to="./about">{language === 'spanish' ? 'About' : 'Acerca de mi'}</Nav.Link>
                                <NavDropdown
                                    className='nav__link'
                                    title={language === 'spanish' ? 'Gallery' : 'Galería'}
                                    id="offcanvasNavbarDropdown"
                                >
                                    <NavDropdown.Item className='nav__link' as={Link} to="./drawings">Dibujos</NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./paintings">
                                        Pinturas
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./collage">
                                        Collage
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./installations">
                                        Instalaciones
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./oleopastel">
                                        Óleo pastel
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