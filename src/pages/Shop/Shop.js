import React from 'react';
import { useShop } from 'hooks';
import Products from './components/Products/Products';

const Shop = () => {
    const { data: products, loading, error } = useShop();

    if (error) return <main>Error</main>;

    return (
        <main>
            <Products products={products} loading={loading} />
        </main>
    );
};

export default Shop;
