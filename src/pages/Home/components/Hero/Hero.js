import React from 'react';
import image from 'assets/hero.jpg';
import { Link } from 'react-router-dom';
import { Button } from 'components';
import { Image, MessageContainer, Message } from './Hero.styled';

const Hero = () => {
    return (
        <>
            <Image src={image} alt="" />
            <MessageContainer>
                <Message>Your style, Your way</Message>
                <Button as={Link} to="/shop" className="btn">
                    Shop Now
                </Button>
            </MessageContainer>
        </>
    );
};

export default Hero;
