import styled from 'styled-components';

export const Label = styled.label`
    display: block;
    margin-bottom: 1em;
`;

export const Input = styled.input.attrs({ type: 'number' })`
    font-size: 1.25rem;
    padding: 1em;
    font-family: inherit;
    appearance: none;
    border-radius: 0.4em;
    outline: solid transparent;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey.dark};

    &:focus {
        box-shadow: 0 0 0 1px white,
            0 0 0 3px ${({ theme }) => theme.colors.orange.light};
    }
`;
