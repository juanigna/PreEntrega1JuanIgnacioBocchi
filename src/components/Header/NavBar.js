import React, { useContext } from 'react';
import CarWidget from './CarWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/flower.png';
import '../../App.css';
import NavItem from './NavItem';
import { Link, NavLink } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';

//Componente encargado del NavBar

const NavBar = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/">
                        <img
                            className="nav-logo ms-2"
                            alt="Page logo"
                            src={Logo}
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="align-items-center ms-auto gap-3 me-3">
                            <NavItem />
                            <NavLink to="/cart">
                                {cart.length > 0 ? <CarWidget /> : null}
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
