import { useFetch } from 'hooks';

const SHOP_API_URL = 'https://fakestoreapi.com/products';
const DESIRED_CATEGORIES = ["men's clothing", "women's clothing"];

const getShopUrl = (productId) => {
    return productId != null ? `${SHOP_API_URL}/${productId}` : SHOP_API_URL;
};

const useShop = (productId) => {
    const { data, loading, error } = useFetch(getShopUrl(productId));

    const products =
        productId != null
            ? data
            : data?.filter((product) =>
                  DESIRED_CATEGORIES.includes(product.category)
              );

    return {
        data: products || [],
        loading,
        error,
    };
};

export default useShop;
