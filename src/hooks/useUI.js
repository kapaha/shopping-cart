import { useState, useEffect } from 'react';
import { useMediaQuery } from 'hooks';
import { useTheme } from 'styled-components';

const useUI = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(`(min-width: ${theme.breakPoints.medium})`);

    const [isMobileNavActive, setIsMobileNavActive] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    useEffect(() => {
        if (isDesktop) {
            closeMobileNav();
            setIsMobileNavActive(false);
            return;
        }
        setIsMobileNavActive(true);
    }, [isDesktop]);

    useEffect(() => {
        if (isMobileNavOpen) {
            document.body.style.overflow = 'hidden';
            return;
        }

        document.body.style.overflow = '';
    }, [isMobileNavOpen]);

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
