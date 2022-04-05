import { useFetch } from 'hooks';

const SHOP_API_URL = 'https://fakestoreapi.com/products';
const DESIRED_CATEGORIES = ["men's clothing", "women's clothing"];

const useShop = () => {
    const { data: products, loading, error } = useFetch(SHOP_API_URL);

    // filter products to only show clothing items
    const filteredProducts = products?.filter((product) =>
        DESIRED_CATEGORIES.includes(product.category)
    );

    return {
        products: filteredProducts || [],
        loading,
        error,
    };
};

export default useShop;
