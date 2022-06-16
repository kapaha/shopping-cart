import styled from 'styled-components';

export const Container = styled.div`
    > * + * {
        margin-top: 1.5rem;
    }

    .button {
        display: block;
        width: 100%;
        padding: 1em;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.large}) {
        .button {
            width: 35%;
            margin-left: auto;
        }
    }
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.large}) {
        width: 35%;
        margin-left: auto;
    }
`;

export const TotalPriceText = styled.p`
    font-weight: 500;
`;

export const TotalPriceAmount = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.1em;
`;
