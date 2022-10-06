import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

//Componente encargado del Item del navbar

const NavItem = () => {
    return (
        <>
            <NavLink to="/category/cremas">Cremas</NavLink>
            <NavLink to="/category/perfumes">Perfumes</NavLink>
            <NavLink to="/category/limpieza">Limpieza</NavLink>
            <NavLink to="/nosotros">Nosotros</NavLink>
        </>
    );
};

export default NavItem;
