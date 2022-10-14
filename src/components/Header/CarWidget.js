import React, { useContext, useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../App.css';
import CartContext from '../../contexts/CartContext';

const CarWidget = () => {
    const { cart } = useContext(CartContext);
    const [stockNum, setStockNum] = useState(0);

    useEffect(() => {
        const cantidadStock = cart.length;
        setStockNum(cantidadStock);
    }, [cart]);
    return (
        <>
            <div className="cart-container">
                <ShoppingCartIcon className="nav-cart" />
                <div className="cart-amount">
                    <span>{stockNum}</span>
                </div>
            </div>
        </>
    );
};

export default CarWidget;
