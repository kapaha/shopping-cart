import styled from 'styled-components';
import { AiOutlineGithub } from 'react-icons/ai';

export const StyledFooter = styled.footer`
    padding: 1rem;

    text-align: center;
    color: white;

    background-color: ${({ theme }) => theme.colors.darkGrey.dark};
`;

export const Link = styled.a`
    display: inline-flex;
    align-items: center;

    color: inherit;
    font-weight: 500;

    :hover {
        color: ${({ theme }) => theme.colors.yellow.dark};
    }
`;

export const GithubLogo = styled(AiOutlineGithub)`
    margin-left: 0.25em;
    font-size: 1.5rem;
`;
