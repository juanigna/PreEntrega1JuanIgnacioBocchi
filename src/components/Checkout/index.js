import React, { useState } from 'react';
import './styles.css';
import FormCheckout from './components/FormCheckout';
import IdCompra from './components/IdCompra';

const CheckOut = () => {
    const [prodId, setProdId] = useState(null);
    const [loading, setLoading] = useState(false);
    return (
        <div
            className="container d-flex flex-column align-items-center justify-content-center"
            style={{ height: '100vh' }}
        >
            {loading ? <h3>Id de compra Generado!!!</h3> : null}

            {prodId === null ? (
                <FormCheckout setProdId={setProdId} setLoading={setLoading} />
            ) : (
                <IdCompra id={prodId} />
            )}
        </div>
    );
};

export default CheckOut;
