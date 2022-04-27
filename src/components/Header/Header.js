import React from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { IconButton, MobileNav, DesktopNav, StyledLink } from 'components';
import { StyledHeader, Container, Logo, Badge } from './Header.styled';

export const Header = ({
    isMobileNavActive,
    isMobileNavOpen,
    openMobileNav,
    closeMobileNav,
    getCartQuantity,
}) => {
    const cartQuantity = getCartQuantity();

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
                    {cartQuantity !== 0 && <Badge>{cartQuantity}</Badge>}
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
