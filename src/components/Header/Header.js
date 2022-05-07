import React from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import {
    IconButton,
    MobileNav,
    DesktopNav,
    StyledLink,
    IconLink,
} from 'components';
import { StyledHeader, Container, Logo, Badge } from './Header.styled';

export const Header = ({
    isMobileNavActive,
    isMobileNavOpen,
    openMobileNav,
    closeMobileNav,
    cartQuantity,
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
                <IconLink to="/cart">
                    {cartQuantity !== 0 && <Badge>{cartQuantity}</Badge>}
                    <FaShoppingCart />
                </IconLink>
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
