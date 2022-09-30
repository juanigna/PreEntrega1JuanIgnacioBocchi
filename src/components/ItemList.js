import React, { useEffect, useState } from 'react';
import Item from './Item';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import ekosPerfume from '../assets/ekos-perfume.jpg';
import cremaEkos from '../assets/crema-natura.webp';
import kitLimpieza from '../assets/kit-limpieza.jpg';
import desodorante from '../assets/desodorante-roll.jpg';

const stock = [
    {
        id: 1,
        name: 'Pulpa Manos Castaña',
        description: 'Crema Ekos Natura de 75g',
        price: 3000,
        prod_img: cremaEkos,
    },
    {
        id: 2,
        name: 'Ekos Alma Femenino',
        description: 'Perfuma de alta gama',
        price: 13000,
        prod_img: ekosPerfume,
    },
    {
        id: 3,
        name: 'Kit Limpieza + tónico Chronos',
        description: 'Escencial para tu cuidado diario',
        price: 4060,
        prod_img: kitLimpieza,
    },
    {
        id: 4,
        name: 'Desodorante roll on aclarador',
        description: 'Desodorante en roll',
        price: 790,
        prod_img: desodorante,
    },
];

const ItemList = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const getProducts = new Promise((resolve, reject) => {
                resolve(stock);
            }, []);
            getProducts.then((prod) => setProductos([...prod]));
            setIsLoading(false);
        }, 2000);
    });

    return (
        <div className="d-flex ">
            {isLoading ? (
                <Spinner className="m-auto" animation="border" />
            ) : (
                <Item products={productos} />
            )}
        </div>
    );
};

export default ItemList;
