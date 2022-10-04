import React, { useEffect } from 'react';
import stock from './mock/stock';
import '../App.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const ItemDetailContainer = ({ id }) => {
    const [productoEncontrado, setProductoEncontrado] = useState({});
    useEffect(() => {
        const prod = stock.find((el) => el.id === id);
        setProductoEncontrado(prod);
    }, [id]);
    return (
        <Container>
            <div className="detail-container">
                <div className="left-column">
                    <h1 className="detail-name">{productoEncontrado.name}</h1>
                    <h2 className="detail-description">
                        {productoEncontrado.description}
                    </h2>
                    <h3>Precio: ${productoEncontrado.price}</h3>
                    <Button variant="primary">Comprar</Button>
                </div>
                <div className="right-column">
                    <img
                        className="detail-img"
                        src={productoEncontrado.prod_img}
                        alt="Imagen del producto"
                    ></img>
                </div>
            </div>
        </Container>
    );
};

export default ItemDetailContainer;
