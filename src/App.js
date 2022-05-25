import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartContextProvider } from 'context';
import { useUI } from 'hooks';
import { Home, Shop, ProductDetails, Cart, Checkout } from 'pages';
import { Header } from 'components';
import { ThemeProvider } from 'styled-components';
import { homePageTheme, theme } from 'styles/theme';

const App = () => {
    const location = useLocation();
    const currentTheme = location.pathname === '/' ? homePageTheme : theme;

    const {
        isMobileNavActive,
        isMobileNavOpen,
        openMobileNav,
        closeMobileNav,
    } = useUI(currentTheme);

    return (
        <ThemeProvider theme={currentTheme}>
            <CartContextProvider>
                <>
                    <Header
                        isMobileNavActive={isMobileNavActive}
                        isMobileNavOpen={isMobileNavOpen}
                        openMobileNav={openMobileNav}
                        closeMobileNav={closeMobileNav}
                    />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route
                            path="/shop/:productId"
                            element={<ProductDetails />}
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </>
            </CartContextProvider>
        </ThemeProvider>
    );
};

export default App;
