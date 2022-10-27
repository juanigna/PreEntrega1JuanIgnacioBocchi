import React, { useEffect, useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../api/firebase/firebase';

//Componente encargado del Item del navbar

const NavItem = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collectionProd = collection(db, 'categories');
        const getCategories = async () => {
            const res = await getDocs(collectionProd);
            const categories = res.docs.map((cat) => {
                return {
                    id: cat.id,
                    ...cat.data(),
                };
            });
            setCategories(categories);
        };
        getCategories();
    }, []);

    return (
        <>
            {categories?.map((category) => (
                <NavLink
                    key={category.id}
                    to={`/category/${category.category}`}
                >
                    {category.name}
                </NavLink>
            ))}
            {/* <NavLink to="/category/cremas">Cremas</NavLink>
            <NavLink to="/category/perfumes">Perfumes</NavLink>
            <NavLink to="/category/limpieza">Limpieza</NavLink> */}
        </>
    );
};

export default NavItem;
