import Big from 'big.js';
import { useState, useEffect } from 'react';

const createCartProduct = (product, quantity) => {
    if (product.quantity != null) {
        return {
            ...product,
            quantity,
            totalPrice: product.price.mul(quantity),
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
        price: new Big(productSubset.price),
        totalPrice: new Big(productSubset.price).mul(quantity),
    };
};

const useCart = () => {
    const [cart, setCart] = useState([
        {
            id: 2,
            title: 'Mens Casual Premium Slim Fit T-Shirts ',
            image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            quantity: 1,
            price: new Big(22.3),
            totalPrice: new Big(22.3),
        },
    ]);
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
