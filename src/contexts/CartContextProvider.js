import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CartContext from './CartContext';
import 'react-toastify/dist/ReactToastify.css';

const CartContextProvider = ({ children }) => {
    //Inicializo el carrito
    const initalCart =
        JSON.parse(window.localStorage.getItem('cartData')) || [];
    const [cart, setCart] = useState(initalCart);

    const Msg = ({ closeToast, toastProps, item, cantidad }) => (
        <div>
            <span>Añadiste un item al carrito!!</span> <br />
            <span>
                Añadiste {cantidad} - {item.title}
            </span>
        </div>
    );

    //Notificacion
    const notify = (item, cantidad) => {
        toast(<Msg item={item} cantidad={cantidad} />);
    };

    //Funcion encargada de añadir un item al carrito
    const addToCart = (item, cantidad) => {
        const prod = { ...item, cantidad };
        const estaEnElCarrito = cart.some((prod) => prod.id === item.id);
        if (estaEnElCarrito) {
            const newCart = cart.filter((prod) => (prod.cantidad += cantidad));
            setCart([...newCart]);
        } else {
            setCart([...cart, prod]);
        }
        notify(item, cantidad);
    };

    //Guardo el carrito en el localstorage
    useEffect(() => {
        window.localStorage.setItem('cartData', JSON.stringify(cart));
    }, [cart]);

    //Funcion encargada de eliminar un item del carrito
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
