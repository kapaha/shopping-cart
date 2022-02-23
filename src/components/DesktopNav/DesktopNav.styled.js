import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Navbar = styled.nav`
    display: none;
    margin-left: auto;

    @media screen and (min-width: ${theme.breakPoints.extraLarge}) {
        display: block;
    }
`;

export const Menu = styled.ul`
    --spacing: 1rem;
    display: flex;
    margin-right: var(--spacing);
`;

export const MenuItem = styled.li`
    &:not(:first-child) {
        margin-left: var(--spacing);
    }
`;
