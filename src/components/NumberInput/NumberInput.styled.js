import styled from 'styled-components';

export const Label = styled.label`
    display: block;
    margin-bottom: 1em;
`;

export const Input = styled.input`
    font-size: 1.25rem;
    padding: 1em;
    font-family: inherit;
    appearance: none;
    border-radius: 0.4em;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey.dark};
    outline: solid transparent;
    width: 10ch;

    &:focus {
        box-shadow: 0 0 0 1px white,
            0 0 0 3px ${({ theme }) => theme.colors.orange.light};
    }
`;

export const CartInput = styled(Input)`
    border: none;
    width: 3ch;
    text-align: center;
    padding: 0;
`;
