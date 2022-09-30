import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';

//Componente que muestra un saludo mediante una prop

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <Container className="mt-4">
                <Alert variant="info">{greeting}</Alert>
                <ItemList />
            </Container>
        </>
    );
};

export default ItemListContainer;
