import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';
import Logo from '../../images/logo.png';
import {Link, Outlet} from 'react-router-dom';


const Menu = () => {

    return (
        <>
            <Navbar expand="md" className="bg-body-tertiary mb-3" data-bs-theme="light">
                <img src={Logo} className='logo' alt="Logo T.Protein" /><h4 className='menu__eve'>EveArt, Artista.</h4>
                <Container fluid>
                    <Navbar.Brand className='navbar__brand' href="#">{/* T.Protein */}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">EveArt</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className='nav__link' as={Link} to="./home">Inicio</Nav.Link>
                                <Nav.Link className='nav__link' as={Link} to="./about">Acerca de mi</Nav.Link>
                                {/* <Nav.Link className='nav__link' as={Link} to="./protein">Proteínas</Nav.Link>
                                <Nav.Link className='nav__link' as={Link} to="./creatine">Creatina</Nav.Link>
                                <Nav.Link className='nav__link' as={Link} to="./aminoacids">Aminoácidos</Nav.Link>
                                <Nav.Link className='nav__link' as={Link} to="./preworkout">Pre-entrenos</Nav.Link>
                                <Nav.Link className='nav__link' as={Link} to="./accessories">Accesorios</Nav.Link>
                                <Nav.Link className='nav__link' as={Link} to="./gear">indumentaria deportiva</Nav.Link> */}
                                <NavDropdown
                                    className='nav__link'
                                    title="Galería"
                                    id="offcanvasNavbarDropdown"
                                >
                                    <NavDropdown.Item className='nav__link' as={Link} to="./protein">Art 1</NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./creatine">
                                    Art 2
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Item className='nav__link' as={Link} to="./aminoacids">
                                    Aminoácidos
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./preworkout">
                                    Pre-entrenos
                                    </NavDropdown.Item> */}
                                    <NavDropdown.Item className='nav__link' as={Link} to="./accessories">
                                    Art 3
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nav__link' as={Link} to="./gear">
                                    Art 4
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            {/* <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form> */}
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