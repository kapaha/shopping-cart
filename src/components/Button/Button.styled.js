import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from 'styles/theme';

const commonStyles = css`
    // reset
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;

    // default for button, but useful for <a>
    display: inline-block;
    text-align: center;
    text-decoration: none;

    // shared styles
    padding: 0.5em 1em;
    font-size: 1rem;
    font-weight: 600;
    border: solid 2px transparent;
    border-radius: 0.4em;
    outline: solid transparent;
    transition: box-shadow 0.2s ease-in-out;

    &:active {
        transform: translateY(1px);
        filter: saturate(150%);
    }

    &:focus-visible {
        box-shadow: 0 0 0 1px white, 0 0 0 3px ${theme.colors.orange.light};
    }
`;

export const StyledButton = styled.button`
    ${commonStyles}

    color: white;
    background-color: ${theme.colors.purple.light};

    &:hover {
        color: ${theme.colors.purple.light};
        border-color: currentColor;
        background-color: white;
    }
`;

export const IconButton = styled.button`
    ${commonStyles}

    font-size: 1.5rem;
    padding: 0.5em;

    &:hover {
        border-color: white;
    }

    svg {
        display: block;
    }
`;

export const StyledLink = styled(Link)`
    ${commonStyles}

    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 0;

    &:hover {
        color: ${theme.colors.yellow.light};
    }
`;
