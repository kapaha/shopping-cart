import React from 'react';
import { formatPriceUK } from 'utils';
import { Link } from 'react-router-dom';
import { useCartContext } from 'context';
import { Button } from 'components';
import CartProducts from '../CartProducts/CartProducts';

const CartNotEmpty = () => {
    const { cartTotalPrice } = useCartContext();

    return (
        <div>
            <CartProducts />
            <p>Total: {formatPriceUK(cartTotalPrice.toString())}</p>
            <Button as={Link} to="/checkout">
                Checkout
            </Button>
        </div>
    );
};

export default CartNotEmpty;
