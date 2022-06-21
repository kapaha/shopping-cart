import React from 'react';
import { StyledFooter, Link, GithubLogo } from './Footer.styled';

export const Footer = () => {
    return (
        <StyledFooter>
            Created by {''}
            <Link
                href="https://github.com/kapaha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kapaha Github"
            >
                Kapaha
                <GithubLogo className="github-logo" />
            </Link>
        </StyledFooter>
    );
};
