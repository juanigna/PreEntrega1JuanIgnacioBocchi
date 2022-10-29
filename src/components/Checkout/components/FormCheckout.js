import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState, useContext } from 'react';
import { db } from '../../../api/firebase/firebase';
import CartContext from '../../../contexts/CartContext';

const FormCheckout = ({ setProdId, setLoading }) => {
    const [userData, setUserData] = useState({});
    const [formValidate, setFormValidate] = useState({
        emailAndPass: false,
        cartEmpty: false,
    });

    const { cart, cartTotal, setCart } = useContext(CartContext);

    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const addOrderToStoreage = async (order) => {
        try {
            const ordersCollection = collection(db, 'orders');
            const addToFirebase = await addDoc(ordersCollection, order);
            setProdId(addToFirebase.id);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const mailValidate = regex.test(userData.mail);
        if (mailValidate) {
            if (cart.length > 0) {
                setFormValidate({
                    emailAndPass: false,
                    cartEmpty: false,
                });
                const order = {
                    buyer: userData.name,
                    items: cart,
                    total: cartTotal,
                    date: serverTimestamp(),
                };
                addOrderToStoreage(order);

                setUserData({
                    name: '',
                    mail: '',
                });
                setCart([]);
                setLoading(false);
            } else {
                setFormValidate({
                    ...formValidate,
                    cartEmpty: true,
                });
            }
        } else {
            setFormValidate({
                ...formValidate,
                emailAndPass: true,
            });
        }
    };

    return (
        <>
            <form
                className="d-flex flex-column align-items-center justify-content-center gap-4 p-5 bg-light rounded"
                onSubmit={handleSubmit}
            >
                <input
                    name="name"
                    type="text"
                    placeholder="Ingrese su nombre"
                    onChange={handleChange}
                    value={userData.name}
                    required
                />
                <input
                    name="mail"
                    type="mail"
                    className={formValidate.emailAndPass ? 'error' : ''}
                    placeholder="Ingrese su email"
                    onChange={handleChange}
                    value={userData.mail}
                    required
                />
                {formValidate.emailAndPass ? (
                    <span className="lead">
                        Ingrese una direccion de email valida!
                    </span>
                ) : null}
                {formValidate.cartEmpty ? (
                    <span className="lead">
                        Debes tener al menos un elemento en el carrito!
                    </span>
                ) : null}
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
                <h3 className="my-3 lead">Total de la compra: ${cartTotal}</h3>
            </form>
        </>
    );
};

export default FormCheckout;
