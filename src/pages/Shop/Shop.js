import React from 'react';
import { useShop } from 'hooks';
import Products from './components/Products/Products';

const Shop = () => {
    const { data: products, loading, error } = useShop();

    if (loading) return 'loading';
    if (error) return 'error';

    return (
        <main>
            <Products products={products} />
        </main>
    );
};

export default Shop;
