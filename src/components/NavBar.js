import React from 'react';
import CarWidget from './CarWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/flower.png';
import '../App.css';

const pages = ['Home', 'Productos', 'Acerca de nosotros'];

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img
                            className="nav-logo ms-2"
                            alt="Page logo"
                            src={Logo}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto gap-3 me-3">
                            {pages.map((el, index) => {
                                return <Nav.Link href="#">{el}</Nav.Link>;
                            })}
                        </Nav>
                        <CarWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
