import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ItemCount from './ItemCount';
import CartContext from '../../contexts/CartContext';

const ItemDetail = ({ producto }) => {
    const [units, setUnits] = useState(0);
    const { products, addToCart } = useContext(CartContext);

    const onAdd = (cuantity) => {
        setUnits(cuantity);
        addToCart(producto, cuantity);
        console.log(products);
    };

    return (
        <Container>
            <div className="detail-container">
                <div className="left-column">
                    <h1 className="detail-name">{producto.name}</h1>
                    <h2 className="detail-description">
                        {producto.description}
                    </h2>
                    <h3>Precio: ${producto.price}</h3>
                    {!units ? (
                        <ItemCount
                            onAdd={onAdd}
                            initialStock={1}
                            maxLimit={producto.stock}
                        />
                    ) : (
                        <Link to="/cart">
                            <Button variant="primary">Ir al carrito</Button>
                        </Link>
                    )}
                </div>
                <div className="right-column">
                    <img
                        className="detail-img"
                        src={producto.prod_img}
                        alt="Imagen del producto"
                    ></img>
                </div>
            </div>
        </Container>
    );
};

export default ItemDetail;
