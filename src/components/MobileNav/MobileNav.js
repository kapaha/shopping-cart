import React from 'react';
import { useMobileNavContext } from 'context';
import { FaTimes } from 'react-icons/fa';
import FocusTrap from 'focus-trap-react';
import { IconButton, StyledLink } from 'components';
import { Navbar, Menu, MenuItem, MenuControls } from './MobileNav.styled';

export const MobileNav = () => {
    const { isMobileNavOpen, closeMobileNav } = useMobileNavContext();

    return (
        <FocusTrap active={isMobileNavOpen}>
            <Navbar isMobileNavOpen={isMobileNavOpen}>
                <MenuControls>
                    <IconButton
                        onClick={closeMobileNav}
                        className="close-btn"
                        aria-label="Close mobile menu"
                        aria-expanded={isMobileNavOpen}
                    >
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
        </FocusTrap>
    );
};
