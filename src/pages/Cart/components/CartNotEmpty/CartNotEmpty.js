import React from 'react';
import CartProducts from '../CartProducts/CartProducts';

const CartNotEmpty = ({ cart, cartTotalPrice, updateCart }) => {
    return (
        <div>
            <CartProducts cart={cart} updateCart={updateCart} />
            <p>Total: £{cartTotalPrice}</p>
        </div>
    );
};

export default CartNotEmpty;
