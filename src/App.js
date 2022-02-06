import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

const Home = () => {
    return <div>Homepage</div>;
};

export default App;
