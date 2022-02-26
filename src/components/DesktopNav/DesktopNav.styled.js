import styled from 'styled-components';

export const Navbar = styled.nav`
    margin-left: auto;
`;

export const Menu = styled.ul`
    --spacing: 1.5em;
    display: flex;
    margin-right: var(--spacing);
`;

export const MenuItem = styled.li`
    font-size: 1.5rem;

    &:not(:first-child) {
        margin-left: var(--spacing);
    }
`;
