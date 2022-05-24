import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components';
import CartProducts from '../CartProducts/CartProducts';

const CartNotEmpty = ({ cart, cartTotalPrice, updateCart }) => {
    return (
        <div>
            <CartProducts cart={cart} updateCart={updateCart} />
            <p>Total: £{cartTotalPrice}</p>
            <Button as={Link} to="/checkout">
                Checkout
            </Button>
        </div>
    );
};

export default CartNotEmpty;
