import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useUI } from 'hooks';
import { Home } from 'pages';
import { Header } from 'components';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const App = () => {
    const { isMobileNavActive, openMobileNav, closeMobileNav } = useUI();

    return (
        <ThemeProvider theme={theme}>
            <>
                <Header
                    isMobileNavActive={isMobileNavActive}
                    openMobileNav={openMobileNav}
                    closeMobileNav={closeMobileNav}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </>
        </ThemeProvider>
    );
};

const Shop = () => {
    return <div>Shop page</div>;
};

export default App;
