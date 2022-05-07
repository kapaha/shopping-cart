import styled, { css } from 'styled-components';
import { Button } from 'components';
import { FaSpinner, FaRegCheckCircle } from 'react-icons/fa';

export const StyledButton = styled(Button)`
    padding: 1em;
    margin-top: 1.5em;
    width: 100%;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.medium}) {
        order: 5;
    }
`;

const iconStyles = css`
    color: currentColor;
    position: absolute;
    top: 50%;
    left: 1rem;
    font-size: 1.5rem;
    transform: translateY(-50%);
`;

export const Spinner = styled(FaSpinner)`
    ${iconStyles}

    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
        from {
            transform: translateY(-50%) rotate(0deg);
        }
        to {
            transform: translateY(-50%) rotate(360deg);
        }
    }
`;

export const CheckCircle = styled(FaRegCheckCircle)`
    ${iconStyles}
`;
