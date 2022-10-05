import React, { useEffect } from 'react';
import stock from './mock/stock';
import '../App.css';
import { useState } from 'react';

import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ id }) => {
    const [productoEncontrado, setProductoEncontrado] = useState({});
    useEffect(() => {
        const prod = stock.find((el) => el.id === id);
        setProductoEncontrado(prod);
    }, [id]);

    return <ItemDetail producto={productoEncontrado} />;
};

export default ItemDetailContainer;
