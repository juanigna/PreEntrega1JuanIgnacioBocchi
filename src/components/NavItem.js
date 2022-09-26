import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

//Componente encargado del Item del navbar

const NavItem = (props) => {
    return (
        <>
            <Nav.Link href="#">{props.item}</Nav.Link>
        </>
    );
};

export default NavItem;
