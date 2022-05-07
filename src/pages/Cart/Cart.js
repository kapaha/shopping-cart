import React from 'react';
import EmptyCart from './components/EmptyCart/EmptyCart';
import { Container, Title } from './Cart.styled';

const Cart = () => {
    return (
        <main>
            <Container>
                <Title>Shopping Cart</Title>
                <EmptyCart />
            </Container>
        </main>
    );
};

export default Cart;
