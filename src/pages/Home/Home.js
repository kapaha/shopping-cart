import React from 'react';
import Hero from './components/Hero/Hero';
import { useDocumentTitle } from 'hooks';

const Home = () => {
    useDocumentTitle('Ochre');
    return (
        <main>
            <Hero />
        </main>
    );
};

export default Home;
