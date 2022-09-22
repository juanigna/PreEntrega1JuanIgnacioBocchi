import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <Container className="mt-4">
                <Alert variant="info">{greeting}</Alert>
            </Container>
        </>
    );
};

export default ItemListContainer;
