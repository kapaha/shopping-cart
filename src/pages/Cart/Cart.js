import React from 'react';
import { useCartContext } from 'context';
import { PageContainer } from 'components';
import { useDocumentTitle } from 'hooks';
import EmptyCart from './components/EmptyCart/EmptyCart';
import CartNotEmpty from './components/CartNotEmpty/CartNotEmpty';
import { Title } from './Cart.styled';

const Cart = () => {
    const { cartQuantity } = useCartContext();
    useDocumentTitle('Cart — Ochre');

    return (
        <PageContainer>
            <Title>Shopping Cart</Title>
            {cartQuantity ? <CartNotEmpty /> : <EmptyCart />}
        </PageContainer>
    );
};

export default Cart;
