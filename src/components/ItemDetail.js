import React from 'react';
import Container from 'react-bootstrap/Container';
import ItemCount from './ItemCount';

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
                    <ItemCount initialStock={1} maxLimit={8} />
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
