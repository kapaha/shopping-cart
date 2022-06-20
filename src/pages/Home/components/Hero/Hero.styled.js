import styled from 'styled-components';

export const Image = styled.img`
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    object-position: 35% 20%;
    z-index: -1;
`;

export const MessageContainer = styled.div`
    flex-grow: 1;
    margin-top: 20vmax;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    text-align: center;

    > * + * {
        margin-top: 2rem;
    }

    .btn {
        font-size: 1.25rem;
    }

    @media screen and (min-width: ${(props) => props.theme.breakPoints.small}) {
        margin-top: 0;
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
