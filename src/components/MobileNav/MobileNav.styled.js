import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Navbar = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0 1rem;
    transform: ${({ isMenuActive }) =>
        isMenuActive ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    background-color: ${theme.colors.darkBlue.dark};
`;

export const Menu = styled.ul`
    margin-top: 85px;
`;

export const MenuItem = styled.li`
    border-bottom: 1px solid white;
    font-size: 1.5rem;

    .icon {
        margin-right: 0.5em;
    }

    .link {
        padding: 2em;
    }
`;
