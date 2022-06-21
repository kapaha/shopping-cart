import React from 'react';
import { useCartContext, useMobileNavContext } from 'context';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import {
    IconButton,
    MobileNav,
    DesktopNav,
    StyledLink,
    IconLink,
} from 'components';
import { StyledHeader, Container, Logo, Badge } from './Header.styled';

export const Header = () => {
    const { cartQuantity } = useCartContext();
    const { isMobileNavActive, openMobileNav, isMobileNavOpen } =
        useMobileNavContext();

    return (
        <StyledHeader>
            <Container>
                {isMobileNavActive && (
                    <IconButton
                        onClick={openMobileNav}
                        className="menu-toggle"
                        aria-label="Open mobile menu"
                        aria-expanded={isMobileNavOpen}
                    >
                        <FaBars />
                    </IconButton>
                )}
                <StyledLink to="/" aria-label="Home">
                    <Logo>Ochre</Logo>
                </StyledLink>
                {!isMobileNavActive && <DesktopNav />}
                <IconLink to="/cart" aria-label="Cart">
                    {cartQuantity !== 0 && (
                        <Badge>
                            {cartQuantity > 99 ? '99+' : cartQuantity}
                        </Badge>
                    )}
                    <FaShoppingCart />
                </IconLink>
            </Container>
            {isMobileNavActive && <MobileNav />}
        </StyledHeader>
    );
};
