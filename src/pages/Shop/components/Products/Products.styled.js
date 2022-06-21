import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    row-gap: 20vw;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.small}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 7.5vw;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.large}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .product-link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

export const CardImage = styled.img`
    min-height: 200px;
    height: 25vh;
    width: 100%;
    object-fit: contain;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    margin-top: 1rem;
`;

export const Name = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.5;
    max-width: 20ch;
`;

export const Price = styled.p`
    font-weight: 600;
    color: ${(props) => props.theme.colors.darkGrey.dark};
    letter-spacing: 0.1em;
    margin-top: 1rem;
`;

export const SkeletonCard = styled(Card)`
    > *,
    .skeleton-container {
        width: 100%;
        max-width: 75vw;
    }

    .skeleton-name:last-of-type {
        margin-top: 0.5rem;
    }

    .skeleton-img {
        min-height: 200px;
        height: 25vh;
        width: 100%;
    }

    .skeleton-price {
        width: 6ch;
    }
`;
