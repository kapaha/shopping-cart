import styled from 'styled-components';

export const Navbar = styled.nav`
    margin-left: auto;
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
