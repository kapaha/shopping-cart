import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components';
import { Container, InfoText } from './EmptyCart.styled';

const EmptyCart = () => {
    return (
        <Container>
            <InfoText>You have nothing in your shopping cart.</InfoText>
            <Button as={Link} to="/shop" className="button">
                Continue Shopping
            </Button>
        </Container>
    );
};

export default EmptyCart;
