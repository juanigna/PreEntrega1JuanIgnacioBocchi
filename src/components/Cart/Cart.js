import React from 'react';
import CartContext from '../../contexts/CartContext.js';
import CartItems from './CartItems.js';

import { useContext, useState, useEffect } from 'react';

const Cart = () => {
    const { cart } = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);

    const total = cart.reduce((val, acc) => {
        return val + acc.price * acc.cantidad;
    }, 0);

    useEffect(() => {
        setCartTotal(total);
    }, [total]);

    return (
        <div className="container mx-auto d-flex flex-column text-center justify-contents-center align-items-center bg-light mt-5 mb-5 rounded-3">
            <h1 className="cart-title">Bienvenido al carrito!!!</h1>
            <CartItems />
            {cart.length > 0 ? (
                <button className="btn btn-primary">Finalizar compra</button>
            ) : null}
            <h3>Total: {cartTotal}$</h3>
        </div>
    );
};

export default Cart;
