import styled from 'styled-components';

export const Navbar = styled.nav`
    --border: 1px solid white;

    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0 1rem;
    transform: ${({ isMobileNavOpen }) =>
        isMobileNavOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    background-color: ${(props) => props.theme.colors.darkGrey.dark};
    z-index: 9999;
    overflow-y: auto;
`;

export const MenuControls = styled.div`
    padding: 1.5rem 0;
    border-bottom: var(--border);

    .close-btn {
        color: white;
    }
`;

export const Menu = styled.ul``;

export const MenuItem = styled.li`
    font-size: 1.5rem;
    border-bottom: var(--border);

    .link {
        padding: 3rem;
        color: white;

        &:hover {
            color: ${(props) => props.theme.colors.yellow.light};
        }
    }
`;
