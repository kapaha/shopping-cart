import React from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { IconButton, MobileNav, DesktopNav, StyledLink } from 'components';
import { StyledHeader, Container, Logo } from './Header.styled';

export const Header = ({
    isMobileNavActive,
    toggleMobileNav,
    closeMobileNav,
}) => {
    return (
        <StyledHeader>
            <Container>
                <IconButton onClick={toggleMobileNav} className="menu-toggle">
                    {isMobileNavActive ? <FaTimes /> : <FaBars />}
                </IconButton>
                <StyledLink to="/" className="logo">
                    Logo
                </StyledLink>
                <DesktopNav />
                <IconButton>
                    <FaShoppingCart />
                </IconButton>
            </Container>
            <MobileNav
                isMenuActive={isMobileNavActive}
                closeMobileNav={closeMobileNav}
            />
        </StyledHeader>
    );
};
