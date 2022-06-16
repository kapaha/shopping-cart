import styled from 'styled-components';

export const Container = styled.div`
    .btn {
        padding: 0.25em;
        font-size: 1.25rem;
        border-radius: 50%;

        :hover {
            color: ${({ theme }) => theme.textColors.secondary};
            border-color: transparent;
            background-color: ${({ theme }) => theme.colors.darkGrey.dark};
        }
    }

    .btn-container {
        width: fit-content;
        margin-left: auto;
        grid-area: btn;
    }
`;

export const Product = styled.div`
    padding: 1rem 0 1rem 0.5rem;

    display: grid;
    grid-template-columns: 50px 2fr 1fr 1fr;
    grid-template-areas:
        'image title title btn'
        'image form  form  price';
    gap: 1.25rem;

    border-bottom: 1px solid grey;

    div:last-child {
        grid-area: error;
    }

    &.error {
        grid-template-areas:
            'image title title btn'
            'image form  form  price'
            'error error error error';
    }

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.medium}) {
        grid-template-columns: 100px 3fr 1.5fr 1fr auto;
        grid-template-areas:
            'image title form  price btn'
            'image .     .     .     .';
        gap: 2rem;

        &.error {
            grid-template-areas:
                'image title form  price btn'
                'image .     .     .     .'
                'error error error error error';
        }
    }
`;

export const Image = styled.img`
    margin: auto;
    grid-area: image;
`;

export const Name = styled.p`
    padding: 0.25em;
    grid-area: title;

    font-weight: 500;
    line-height: 1.75em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Quantity = styled.div`
    margin-right: auto;
    grid-area: form;
    display: flex;
    align-items: center;

    input {
        margin: 0 0.25em;
    }
`;

export const Price = styled.p`
    grid-area: price;
    align-self: center;

    letter-spacing: 0.1em;
    text-align: right;
`;
