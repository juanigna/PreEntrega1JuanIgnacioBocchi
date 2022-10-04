import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css';

const CarWidget = () => {
    return (
        <>
            <div className="cart-container">
                <ShoppingCartIcon className="nav-cart" />
                <span className="cart-amount">7</span>
            </div>
        </>
    );
};

export default CarWidget;
