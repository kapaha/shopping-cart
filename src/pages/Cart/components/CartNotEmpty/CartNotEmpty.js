import React from 'react';
import CartProducts from '../CartProducts/CartProducts';

const CartNotEmpty = ({ cart, updateCart }) => {
    return <CartProducts cart={cart} updateCart={updateCart} />;
};

export default CartNotEmpty;
