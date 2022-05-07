import styled from 'styled-components';

export const Product = styled.div`
    max-width: 1400px;
    padding: 7vw;
    margin: 0 auto;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.medium}) {
        display: flex;
        justify-content: space-between;
    }

    .skeleton-number-input {
        @media screen and (min-width: ${({ theme }) =>
                theme.breakPoints.medium}) {
            order: 4;
        }
    }

    .skeleton-img-container {
        @media screen and (min-width: ${({ theme }) =>
                theme.breakPoints.medium}) {
            width: 35%;
        }

        .skeleton-img {
            width: 75%;
            height: 90vw;
            margin: 0 auto;
            display: block;

            @media screen and (min-width: ${({ theme }) =>
                    theme.breakPoints.medium}) {
                width: 100%;
                height: 100%;
                margin: 0;
            }
        }
    }

    .skeleton-price {
        width: 6ch;
    }

    .skeleton-quantity {
        width: 9ch;
    }

    .skeleton-input {
        margin-top: 1rem;
        height: 66px;
        width: 94px;
    }

    .skeleton-btn-container {
        @media screen and (min-width: ${({ theme }) =>
                theme.breakPoints.medium}) {
            order: 5;
        }
    }

    .skeleton-btn {
        padding: 1rem;
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

export const ProductForm = styled.form`
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.medium}) {
        order: 5;
    }
`;
