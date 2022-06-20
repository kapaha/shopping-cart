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
            >
                Kapaha
                <GithubLogo className="github-logo" />
            </Link>
        </StyledFooter>
    );
};
