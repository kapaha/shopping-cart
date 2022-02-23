import styled from 'styled-components';
import { theme } from 'styles/theme';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 1rem;
    color: white;
    background-color: ${theme.colors.darkBlue.dark};

    @media screen and (min-width: ${theme.breakPoints.medium}) {
        padding: 2rem;
    }

    .menu-toggle {
        z-index: ${theme.zIndex.menuToggle};

        @media screen and (min-width: ${theme.breakPoints.large}) {
            display: none;
        }
    }

    .logo {
        font-size: 2rem;

        padding: 0.25em 0.5em;

        @media screen and (min-width: ${theme.breakPoints.tablets}) {
            font-size: 2.5rem;
        }
    }
`;

export const Container = styled.div`
    flex-grow: 1;
    max-width: 1024px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;
