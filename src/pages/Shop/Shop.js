import React from 'react';
import { useShop } from 'hooks';
import { PageContainer } from 'components';
import Products from './components/Products/Products';

const Shop = () => {
    const { data: products, loading, error } = useShop();

    if (error) return <main>Error</main>;

    return (
        <PageContainer>
            <Products products={products} loading={loading} />
        </PageContainer>
    );
};

export default Shop;
