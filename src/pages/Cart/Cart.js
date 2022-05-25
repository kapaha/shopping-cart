import React from 'react';
import { useCartContext } from 'context';
import EmptyCart from './components/EmptyCart/EmptyCart';
import CartNotEmpty from './components/CartNotEmpty/CartNotEmpty';
import { Container, Title } from './Cart.styled';

const Cart = () => {
    const { cartQuantity } = useCartContext();

    return (
        <main>
            <Container>
                <Title>Shopping Cart</Title>
                {cartQuantity ? <CartNotEmpty /> : <EmptyCart />}
            </Container>
        </main>
    );
};

export default Cart;
