import React from 'react';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import './style.css';

const Cart = () => {
    const { cart, deleteFromCart } = useContext(CartContext);
    return (
        <div className="cart-container">
            <h1 className="cart-title">Bienvenido al carrito!!!</h1>
            <div className="cart">
                {cart.length !== 0 ? (
                    cart?.map((prods) => (
                        <div className="cart-item" key={prods.id}>
                            <h3 className="cart-item-title">{prods.name}</h3>
                            <h3>${prods.price}</h3>
                            <h3>Cantidad: {prods.cantidad}</h3>
                            <h3>Total: ${prods.price * prods.cantidad}</h3>
                            <button
                                onClick={() => deleteFromCart(prods.id)}
                                className="btn btn-danger"
                            >
                                Eliminar del carrito
                            </button>
                        </div>
                    ))
                ) : (
                    <h1>Agrega elementos al carrito!!!</h1>
                )}
            </div>
        </div>
    );
};

export default Cart;
