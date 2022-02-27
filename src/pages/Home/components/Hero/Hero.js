import React from 'react';
import image from 'assets/hero.jpg';
import { Link } from 'react-router-dom';
import { Button } from 'components';
import { Container, Image, MessageContainer, Message } from './Hero.styled';

const Hero = () => {
    return (
        <Container>
            <Image src={image} />
            <MessageContainer>
                <Message>Your style, Your way</Message>
                <Button as={Link} to="/shop" className="btn">
                    Shop Now
                </Button>
            </MessageContainer>
        </Container>
    );
};

export default Hero;