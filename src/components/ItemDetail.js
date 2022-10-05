import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ producto }) => {
    return (
        <Container>
            <div className="detail-container">
                <div className="left-column">
                    <h1 className="detail-name">{producto.name}</h1>
                    <h2 className="detail-description">
                        {producto.description}
                    </h2>
                    <h3>Precio: ${producto.price}</h3>
                    <Button variant="primary">Agregar al carrito</Button>
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
