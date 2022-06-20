import React from 'react';
import { PageContainer } from 'components';
import Hero from './components/Hero/Hero';
import { useDocumentTitle } from 'hooks';

const Home = () => {
    useDocumentTitle('Ochre');
    return (
        <PageContainer>
            <Hero />
        </PageContainer>
    );
};

export default Home;
