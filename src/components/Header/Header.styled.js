import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    @media screen and (min-width: ${(props) =>
            props.theme.breakPoints.medium}) {
        padding: 2rem;
    }

    .menu-toggle {
        @media screen and (min-width: ${(props) =>
                props.theme.breakPoints.large}) {
            display: none;
        }
    }
`;

export const Logo = styled.h1`
    font-family: ${(props) => props.theme.fontFamily.title};
    font-size: 3rem;
    letter-spacing: 0.2em;
    height: 100%;
    padding: 0.1em 0 0 0.2em;
`;

export const Container = styled.div`
    flex-grow: 1;
    max-width: 1400px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Badge = styled.span`
    --size: 24px;

    position: absolute;
    top: 0;
    right: 0;

    width: var(--size);
    height: var(--size);

    font-size: 12px;
    line-height: var(--size);
    color: white;

    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.red.dark};
`;
