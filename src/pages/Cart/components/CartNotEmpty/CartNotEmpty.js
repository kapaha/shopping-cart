import React from 'react';
import { formatPriceUK } from 'utils';
import { Link } from 'react-router-dom';
import { useCartContext } from 'context';
import { Button } from 'components';
import CartProducts from '../CartProducts/CartProducts';
import {
    Container,
    Flex,
    TotalPriceText,
    TotalPriceAmount,
} from './CartNotEmpty.styled';

const CartNotEmpty = () => {
    const { cartTotalPrice } = useCartContext();

    return (
        <Container>
            <CartProducts />
            <Flex>
                <TotalPriceText>Total</TotalPriceText>
                <TotalPriceAmount aria-label="Total cart price">
                    {formatPriceUK(cartTotalPrice.toString())}
                </TotalPriceAmount>
            </Flex>
            <Button as={Link} to="/checkout" className="button">
                Checkout
            </Button>
        </Container>
    );
};

export default CartNotEmpty;
