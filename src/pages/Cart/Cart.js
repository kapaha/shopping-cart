import React from 'react';
import EmptyCart from './components/EmptyCart/EmptyCart';
import CartNotEmpty from './components/CartNotEmpty/CartNotEmpty';
import { Container, Title } from './Cart.styled';

const Cart = ({ cart, cartQuantity, cartTotalPrice, updateCart }) => {
    return (
        <main>
            <Container>
                <Title>Shopping Cart</Title>
                {cartQuantity ? (
                    <CartNotEmpty
                        cart={cart}
                        cartTotalPrice={cartTotalPrice}
                        updateCart={updateCart}
                    />
                ) : (
                    <EmptyCart />
                )}
            </Container>
        </main>
    );
};

export default Cart;
