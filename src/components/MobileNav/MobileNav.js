import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { IconButton, StyledLink } from 'components';
import { Navbar, Menu, MenuItem, MenuControls } from './MobileNav.styled';

export const MobileNav = ({ isMobileNavOpen, closeMobileNav }) => {
    return (
        <Navbar isMobileNavOpen={isMobileNavOpen}>
            <MenuControls>
                <IconButton onClick={closeMobileNav}>
                    <FaTimes />
                </IconButton>
            </MenuControls>
            <Menu>
                <MenuItem>
                    <StyledLink
                        to="/"
                        onClick={closeMobileNav}
                        className="link"
                    >
                        Home
                    </StyledLink>
                </MenuItem>
                <MenuItem>
                    <StyledLink
                        to="/shop"
                        onClick={closeMobileNav}
                        className="link"
                    >
                        Shop
                    </StyledLink>
                </MenuItem>
            </Menu>
        </Navbar>
    );
};
