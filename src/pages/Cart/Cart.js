import React from 'react';
import EmptyCart from './components/EmptyCart/EmptyCart';
import { Container, Title } from './Cart.styled';

const Cart = ({ cartQuantity }) => {
    return (
        <main>
            <Container>
                <Title>Shopping Cart</Title>
                {cartQuantity ? <p>Cart Has Items</p> : <EmptyCart />}
            </Container>
        </main>
    );
};

export default Cart;
