import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';

const Item = ({ products }) => {
    return (
        <Container>
            <div className="product-container gap-3">
                {products.map((product, index) => (
                    <Card
                        key={product.id}
                        style={{ width: '18rem', margin: '0 auto' }}
                        className="card"
                    >
                        <Card.Img
                            variant="top"
                            className="card-img"
                            src={product.prod_img}
                        />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>${product.price}</Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default Item;
