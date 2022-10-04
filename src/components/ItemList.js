import React, { useEffect, useState } from 'react';
import Item from './Item';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import stock from './mock/stock';

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
    }, []);

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
