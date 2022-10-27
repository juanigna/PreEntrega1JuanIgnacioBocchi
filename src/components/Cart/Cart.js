import React from 'react';
import CartContext from '../../contexts/CartContext.js';
import CartItems from './CartItems.js';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, cartTotal } = useContext(CartContext);

    return (
        <div className="container mx-auto d-flex flex-column text-center justify-contents-center align-items-center bg-light mt-5 mb-5 rounded-3">
            <h1 className="cart-title">Bienvenido al carrito!!!</h1>
            <CartItems />
            {cart.length > 0 ? (
                <Link to="/checkout" className="btn btn-primary">
                    Finalizar compra
                </Link>
            ) : null}
            <h3>Total: {cartTotal}$</h3>
        </div>
    );
};

export default Cart;
