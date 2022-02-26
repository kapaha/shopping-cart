import styled from 'styled-components';
import { theme } from 'styles/theme';

export const StyledHeader = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: white;

    @media screen and (min-width: ${theme.breakPoints.medium}) {
        padding: 2rem;
    }

    .menu-toggle {
        z-index: ${theme.zIndex.menuToggle};

        @media screen and (min-width: ${theme.breakPoints.large}) {
            display: none;
        }
    }
`;

export const Logo = styled.h1`
    font-family: ${theme.fontFamily.title};
    font-size: 3rem;
    letter-spacing: 0.2em;
    height: 100%;
    padding: 0.1em 0 0 0.2em;

    &:hover {
        color: ${theme.colors.darkGrey.dark};
    }
`;

export const Container = styled.div`
    flex-grow: 1;
    max-width: 1024px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;
