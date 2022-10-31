import React from 'react';

const IdCompra = ({ id }) => {
    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center bg-light
        p-5 rounded shadow-lg mt-4"
        >
            <h3>Con este id podras hacer un seguimiento a tu compra!!!</h3>
            <span className="font-bold">{id}</span>
        </div>
    );
};

export default IdCompra;
