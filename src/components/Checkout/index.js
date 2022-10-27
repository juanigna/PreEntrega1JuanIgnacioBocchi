import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState, useContext } from 'react';
import { db } from '../../api/firebase/firebase';
import CartContext from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const CheckOut = () => {
    const [userData, setUserData] = useState({});
    const { cart, cartTotal, setCart } = useContext(CartContext);
    const [formValidate, setFormValidate] = useState(false);
    const navigate = useNavigate();

    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const redirect = () => {
        navigate('/');
    };

    const addOrderToStoreage = async (order) => {
        try {
            const ordersCollection = collection(db, 'orders');

            addDoc(ordersCollection, order);
        } catch (e) {
            console.log(e);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const mailValidate = regex.test(userData.mail);
        if (mailValidate) {
            setFormValidate(false);
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
            redirect();
        } else {
            setFormValidate(true);
            console.log('Ingrese una direccion de mail valida!');
        }
    };

    return (
        <div
            className="container d-flex flex-column align-items-center justify-content-center"
            style={{ height: '100vh' }}
        >
            <h3>Finalize su compra!</h3>

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
                    className={formValidate ? 'error' : ''}
                    placeholder="Ingrese su email"
                    onChange={handleChange}
                    value={userData.mail}
                    required
                />
                {formValidate ? (
                    <span className="lead">
                        Ingrese una direccion de email valida!
                    </span>
                ) : null}
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
                <h3 className="my-3 lead">Total de la compra: ${cartTotal}</h3>
            </form>
        </div>
    );
};

export default CheckOut;
