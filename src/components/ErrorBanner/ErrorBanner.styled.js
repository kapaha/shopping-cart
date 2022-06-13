import styled from 'styled-components';

export const Banner = styled.div`
    padding: 0.5em 1em;

    text-align: center;
    color: ${({ theme }) => theme.textColors.secondary};

    background-color: ${({ theme }) => theme.colors.red.dark};

    border-radius: 0.4em;
`;
