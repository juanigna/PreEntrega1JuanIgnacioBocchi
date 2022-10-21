import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';
import CartContext from '../../contexts/CartContext';

const Item = React.memo(({ products }) => {
    const { addToCart } = useContext(CartContext);
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
                            <Button
                                onClick={() => addToCart(product, 1)}
                                variant="primary"
                            >
                                Comprar
                            </Button>{' '}
                            <Link to={`/item/${product.id}`}>
                                <Button variant="secondary">
                                    Ver detalles
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
});

export default Item;
