import { useState, useEffect } from 'react';
import { useMediaQuery } from 'hooks';
import { useTheme } from 'styled-components';

const useUI = () => {
    const theme = useTheme();

    const isDesktop = useMediaQuery(`(min-width: ${theme.breakPoints.medium})`);

    useEffect(() => {
        if (isDesktop) {
            closeMobileNav();
            setIsMobileNavActive(false);
            return;
        }
        setIsMobileNavActive(true);
    }, [isDesktop]);

    const [isMobileNavActive, setIsMobileNavActive] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    function openMobileNav() {
        setIsMobileNavOpen(true);
    }

    function closeMobileNav() {
        setIsMobileNavOpen(false);
    }

    return {
        isMobileNavActive,
        isMobileNavOpen,
        openMobileNav,
        closeMobileNav,
    };
};

export default useUI;
