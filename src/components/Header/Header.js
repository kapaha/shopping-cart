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
    const { isMobileNavActive, openMobileNav } = useMobileNavContext();

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
