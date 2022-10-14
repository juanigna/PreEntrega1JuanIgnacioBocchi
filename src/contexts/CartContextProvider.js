import { useEffect, useState } from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {
    const initalCart =
        JSON.parse(window.localStorage.getItem('cartData')) || [];
    const [cart, setCart] = useState(initalCart);

    const addToCart = (item, cantidad) => {
        const prod = { ...item, cantidad };
        const estaEnElCarrito = cart.some((prod) => prod.id === item.id);
        if (estaEnElCarrito) {
            console.log('Ya ESTA MAN');
        } else {
            setCart([...cart, prod]);
        }
    };

    useEffect(() => {
        window.localStorage.setItem('cartData', JSON.stringify(cart));
    }, [cart]);

    const deleteFromCart = (id) => {
        const cartFilter = cart.filter((prod) => prod.id !== id);
        setCart(cartFilter);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
