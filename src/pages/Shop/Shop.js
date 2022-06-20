import React from 'react';
import { useShop, useDocumentTitle } from 'hooks';
import { PageContainer, APIError } from 'components';
import Products from './components/Products/Products';

const Shop = () => {
    const { data: products, loading, error } = useShop();
    useDocumentTitle('Shop — Ochre');

    if (error)
        return (
            <PageContainer>
                <APIError error={error} />
            </PageContainer>
        );

    return (
        <PageContainer>
            <Products products={products} loading={loading} />
        </PageContainer>
    );
};

export default Shop;
