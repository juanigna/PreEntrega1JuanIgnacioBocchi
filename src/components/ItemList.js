import React, { useEffect, useState } from 'react';
import Item from './Item';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import stock from './mock/stock';
import { useParams } from 'react-router-dom';

const ItemList = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { categoryName } = useParams();

    useEffect(() => {
        setTimeout(() => {
            const getProducts = new Promise((resolve, reject) => {
                const prodFiltrados = stock.filter(
                    (prod) => prod.category === categoryName
                );
                const filtrados = categoryName ? prodFiltrados : stock;
                resolve(filtrados);
            }, []);
            getProducts.then((prod) => setProductos([...prod]));
            setIsLoading(false);
        }, 2000);
    }, [categoryName]);

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
