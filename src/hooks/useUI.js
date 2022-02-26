import { useState, useEffect } from 'react';
import { useMediaQuery } from 'hooks';
import { theme } from 'styles/theme';

const useUI = () => {
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
