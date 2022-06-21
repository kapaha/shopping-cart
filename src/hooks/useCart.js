import Big from 'big.js';
import { useState, useEffect } from 'react';
import { useLocalStorage } from 'hooks';

const createCartProduct = (product, quantity) => {
    if (product.quantity != null) {
        return {
            ...product,
            quantity,
            totalPrice: new Big(product.price).mul(quantity).toNumber(),
        };
    }

    // create a new object with a subset of the products properties
    const productSubset = (({ id, title, image, price }) => ({
        id,
        title,
        image,
        price,
    }))(product);

    return {
        ...productSubset,
        quantity,
        totalPrice: new Big(productSubset.price).mul(quantity).toNumber(),
    };
};

const useCart = () => {
    const [cart, setCart] = useLocalStorage('useCart', []);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(new Big(0));

    useEffect(() => {
        setCartQuantity(
            cart.reduce(
                (totalQuantity, product) => totalQuantity + product.quantity,
                0
            )
        );

        setCartTotalPrice(
            cart.reduce(
                (cartTotalPrice, product) =>
                    cartTotalPrice.add(product.totalPrice),
                new Big(0)
            )
        );
    }, [cart]);

    function updateProductQuantity(product, quantity) {
        setCart((prevState) => {
            const productExists = prevState.find(
                (item) => item.title === product.title
            );

            if (productExists) {
                return prevState
                    .map((item) =>
                        item.id === product.id
                            ? createCartProduct(item, quantity)
                            : item
                    )
                    .filter((item) => item.quantity > 0);
            }

            return [...prevState, createCartProduct(product, quantity)];
        });
    }

    function updateCart(product, quantity, onUpdate) {
        updateProductQuantity(product, quantity);
        onUpdate && onUpdate();
    }

    function getItemQuantity(id) {
        const cartItem = cart.find((item) => item.id === id);
        return cartItem?.quantity ?? 0;
    }

    return {
        cart,
        cartQuantity,
        cartTotalPrice,
        updateCart,
        getItemQuantity,
    };
};

export default useCart;
