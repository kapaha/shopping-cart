import React from 'react';
import { FaHome, FaShoppingBag } from 'react-icons/fa';
import { StyledLink } from 'components';
import { Navbar, Menu, MenuItem } from './MobileNav.styled';

export const MobileNav = ({ isMenuActive, closeMobileNav }) => {
    return (
        <Navbar isMenuActive={isMenuActive}>
            <Menu>
                <MenuItem>
                    <StyledLink
                        to="/"
                        onClick={closeMobileNav}
                        className="link"
                    >
                        <FaHome className="icon" />
                        Home
                    </StyledLink>
                </MenuItem>
                <MenuItem>
                    <StyledLink
                        to="/shop"
                        onClick={closeMobileNav}
                        className="link"
                    >
                        <FaShoppingBag className="icon" />
                        Shop
                    </StyledLink>
                </MenuItem>
            </Menu>
        </Navbar>
    );
};
