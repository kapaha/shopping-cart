import React from 'react';
import { StyledLink } from 'components';
import { Navbar, Menu, MenuItem } from './DesktopNav.styled';

export const DesktopNav = () => {
    return (
        <Navbar>
            <Menu>
                <MenuItem>
                    <StyledLink to="/">Home</StyledLink>
                </MenuItem>
                <MenuItem>
                    <StyledLink to="/shop">Shop</StyledLink>
                </MenuItem>
            </Menu>
        </Navbar>
    );
};
