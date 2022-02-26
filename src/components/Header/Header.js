import React from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { IconButton, MobileNav, DesktopNav, StyledLink } from 'components';
import { StyledHeader, Container, Logo } from './Header.styled';

export const Header = ({
    isMobileNavActive,
    isMobileNavOpen,
    openMobileNav,
    closeMobileNav,
}) => {
    return (
        <StyledHeader>
            <Container>
                {isMobileNavActive && (
                    <IconButton onClick={openMobileNav} className="menu-toggle">
                        <FaBars />
                    </IconButton>
                )}
                <StyledLink to="/">
                    <Logo>Ochre</Logo>
                </StyledLink>
                {!isMobileNavActive && <DesktopNav />}
                <IconButton>
                    <FaShoppingCart />
                </IconButton>
            </Container>
            {isMobileNavActive && (
                <MobileNav
                    isMobileNavOpen={isMobileNavOpen}
                    closeMobileNav={closeMobileNav}
                />
            )}
        </StyledHeader>
    );
};
