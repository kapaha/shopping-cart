import { useState, useEffect } from 'react';
import { useMediaQuery } from 'hooks';
import { theme } from 'styles/theme';

const useUI = () => {
    const isDesktop = useMediaQuery(`(min-width: ${theme.breakPoints.large})`);

    useEffect(() => {
        if (isDesktop) closeMobileNav();
    }, [isDesktop]);

    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

    function openMobileNav() {
        setIsMobileNavActive(true);
    }

    function closeMobileNav() {
        setIsMobileNavActive(false);
    }

    return {
        isMobileNavActive,
        closeMobileNav,
        openMobileNav,
    };
};

export default useUI;
