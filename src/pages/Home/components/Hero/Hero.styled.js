import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Container = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
`;

export const Image = styled.img`
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    object-position: 35% 50%;
    z-index: ${theme.zIndex.heroImage};
`;

export const MessageContainer = styled.div`
    text-align: center;
    margin-top: 10vmax;

    > * + * {
        margin-top: 2rem;
    }
`;

export const Message = styled.h1`
    font-size: 3rem;
    color: black;
`;
