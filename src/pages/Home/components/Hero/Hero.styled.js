import styled from 'styled-components';

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
    object-position: 35% 20%;
    z-index: ${(props) => props.theme.zIndex.heroImage};
`;

export const MessageContainer = styled.div`
    text-align: center;
    margin-top: 30vmax;

    > * + * {
        margin-top: 2rem;
    }

    .btn {
        font-size: 1.25rem;
    }

    @media screen and (min-width: ${(props) => props.theme.breakPoints.small}) {
        margin-top: 10vmax;
    }
`;

export const Message = styled.h1`
    font-size: 3rem;
    color: black;

    @media screen and (min-width: ${(props) =>
            props.theme.breakPoints.medium}) {
        font-size: 4rem;
    }
`;
