import React from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { IconButton, MobileNav, DesktopNav, StyledLink } from 'components';
import { StyledHeader, Container, Logo } from './Header.styled';

export const Header = ({
    isMobileNavActive,
    openMobileNav,
    closeMobileNav,
}) => {
    return (
        <StyledHeader>
            <Container>
                <IconButton onClick={openMobileNav} className="menu-toggle">
                    <FaBars />
                </IconButton>
                <StyledLink to="/">
                    <Logo>Ochre</Logo>
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
