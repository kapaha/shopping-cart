import styled from 'styled-components';

export const Form = styled.form`
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.medium}) {
        order: 5;
    }

    > * + * {
        margin-top: 1.5rem;
    }
`;
