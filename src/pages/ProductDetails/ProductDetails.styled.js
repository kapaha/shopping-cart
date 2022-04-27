import styled from 'styled-components';

export const Product = styled.div`
    max-width: 1400px;
    padding: 7vw;
    margin: 0 auto;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.medium}) {
        display: flex;
        justify-content: space-between;
    }

    .numberInput {
        @media screen and (min-width: ${({ theme }) =>
                theme.breakPoints.medium}) {
            order: 4;
        }
    }
`;

export const ProductImage = styled.img`
    width: 75%;
    margin: 0 auto;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.medium}) {
        width: 35%;
        height: 100%;
        margin: 0;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;

    > * {
        margin-top: 1.5em;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.medium}) {
        width: 50%;
    }
`;

export const ProductTitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.medium}) {
        margin-top: 0;
    }
`;

export const ProductPrice = styled.p`
    font-weight: 500;
    letter-spacing: 0.1em;
`;

export const ProductDescription = styled.p`
    line-height: 1.75;
`;
