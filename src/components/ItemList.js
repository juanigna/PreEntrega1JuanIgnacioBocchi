import React, { useEffect, useState } from 'react';
import Item from './Item';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const stock = [
    {
        id: 1,
        name: 'Crema Natura',
        description: 'La mejor crema que puedas encontrar!!!',
        price: 3000,
    },
    {
        id: 2,
        name: 'Perfume VIP',
        description: 'Perfuma de alta gama, perfecto para gente elegante',
        price: 23000,
    },
    {
        id: 3,
        name: 'Kit Limpieza + tónico Chronos',
        description: 'Escencial para tu cuidado diario',
        price: 4060,
    },
    {
        id: 4,
        name: 'Desodorante roll on aclarador',
        description: 'Desodorante en roll',
        price: 790,
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
