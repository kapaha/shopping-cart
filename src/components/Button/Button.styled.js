import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const commonStyles = css`
    // reset
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;

    display: inline-block;
    text-align: center;
    text-decoration: none;

    // common styles
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
        box-shadow: 0 0 0 1px white,
            0 0 0 3px ${(props) => props.theme.colors.orange.light};
    }
`;

export const StyledButton = styled.button`
    --bg-color: ${(props) => props.theme.colors.darkGrey.dark};

    ${commonStyles}

    padding: 0.5em 1em;
    font-size: 1rem;
    color: white;
    background-color: var(--bg-color);

    &:hover {
        color: var(--bg-color);
        border-color: currentColor;
        background-color: white;
    }
`;

export const IconButton = styled.button`
    ${commonStyles}

    padding: 0.5em;
    font-size: 1.5rem;
    color: ${(props) => props.theme.textColors.primary};

    &:hover {
        border-color: currentColor;
    }

    svg {
        display: block;
    }
`;

export const StyledLink = styled(Link)`
    ${commonStyles}

    color: ${(props) => props.theme.textColors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;

    &:hover {
        color: ${(props) => props.theme.textColors.hover};
    }
`;
