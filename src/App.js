import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </>
        </ThemeProvider>
    );
};

// Below for testing
const Home = () => {
    return <div>Homepage</div>;
};

const Shop = () => {
    return <div>Shop page</div>;
};

export default App;
