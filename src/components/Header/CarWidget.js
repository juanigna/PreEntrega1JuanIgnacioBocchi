import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../App.css';

const CarWidget = () => {
    return (
        <>
            <div className="cart-container">
                <ShoppingCartIcon className="nav-cart" />
                <div className="cart-amount">
                    <span>7</span>
                </div>
            </div>
        </>
    );
};

export default CarWidget;
