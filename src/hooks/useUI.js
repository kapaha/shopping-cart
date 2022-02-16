import { useState, useEffect } from 'react';
import { useMediaQuery } from 'hooks';
import { theme } from 'styles/theme';

const useUI = () => {
    const isDesktop = useMediaQuery(
        `(min-width: ${theme.breakPoints.desktops})`
    );

    useEffect(() => {
        if (isDesktop) closeMobileNav();
    }, [isDesktop]);

    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

    function toggleMobileNav() {
        setIsMobileNavActive((prev) => !prev);
    }

    function closeMobileNav() {
        setIsMobileNavActive(false);
    }

    return { isMobileNavActive, toggleMobileNav, closeMobileNav };
};

export default useUI;
