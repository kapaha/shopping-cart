import styled from 'styled-components';

export const ErrorText = styled.p`
    font-weight: 500;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.red.dark};
`;

export const ErrorHelpText = styled.p`
    margin-top: 1rem;
`;
