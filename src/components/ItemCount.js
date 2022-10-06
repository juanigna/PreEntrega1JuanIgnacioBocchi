import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useState } from 'react';

const ItemCount = ({ initialStock, maxLimit }) => {
    const [stock, setStock] = useState(initialStock);

    const incrementar = () => {
        !(stock >= maxLimit) && setStock(stock + 1);
    };

    const decrementar = () => {
        !(stock <= 1) && setStock(stock - 1);
    };

    return (
        <div className="detail-buy">
            <div className="detail-buy-buttons">
                <Button onClick={decrementar}> - </Button>
                <input type="number" readonly value={stock} />
                <Button onClick={incrementar}> + </Button>
            </div>
            <Button variant="primary">Agregar al carrito</Button>
        </div>
    );
};

export default ItemCount;
