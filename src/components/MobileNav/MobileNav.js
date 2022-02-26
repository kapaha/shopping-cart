import React from 'react';
import { FaTimes, FaHome, FaShoppingBag } from 'react-icons/fa';
import { IconButton, StyledLink } from 'components';
import { Navbar, Menu, MenuItem } from './MobileNav.styled';

export const MobileNav = ({ isMenuActive, closeMobileNav }) => {
    return (
        <Navbar isMenuActive={isMenuActive}>
            <IconButton onClick={closeMobileNav}>
                <FaTimes />
            </IconButton>
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
