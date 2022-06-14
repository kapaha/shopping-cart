import React from 'react';
import { useMobileNavContext } from 'context';
import { FaTimes } from 'react-icons/fa';
import { IconButton, StyledLink } from 'components';
import { Navbar, Menu, MenuItem, MenuControls } from './MobileNav.styled';

export const MobileNav = () => {
    const { isMobileNavOpen, closeMobileNav } = useMobileNavContext();

    return (
        <Navbar isMobileNavOpen={isMobileNavOpen}>
            <MenuControls>
                <IconButton onClick={closeMobileNav} className="close-btn">
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
