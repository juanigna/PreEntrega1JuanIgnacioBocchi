import React, { useEffect } from 'react';
import stock from './mock/stock';
import '../App.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { itemId } = useParams();

    const [productoEncontrado, setProductoEncontrado] = useState({});
    useEffect(() => {
        const prod = stock.find((el) => el.id === Number(itemId));
        setProductoEncontrado(prod);
    }, [itemId]);

    return <ItemDetail producto={productoEncontrado} />;
};

export default ItemDetailContainer;
