import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartContextProvider, MobileNavContextProvider } from 'context';
import { Home, Shop, ProductDetails, Cart, Checkout } from 'pages';
import { Footer, Header } from 'components';
import { ThemeProvider } from 'styled-components';
import { homePageTheme, theme } from 'styles/theme';

const App = () => {
    const location = useLocation();
    const currentTheme = location.pathname === '/' ? homePageTheme : theme;

    return (
        <ThemeProvider theme={currentTheme}>
            <CartContextProvider>
                <>
                    <MobileNavContextProvider>
                        <Header />
                    </MobileNavContextProvider>
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
            <Footer />
        </ThemeProvider>
    );
};

export default App;
