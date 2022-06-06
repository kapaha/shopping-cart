import { useState, useEffect, useRef } from 'react';
import Big from 'big.js';

export const CART_STATUS = Object.freeze({
    READY: 'ready',
    UPDATING_PRODUCT: 'updating-product',
    UPDATING_PRODUCT_COMPLETE: 'updating-product-complete',
});

const createCartProduct = (product, quantityInc) => {
    if (product.quantity != null) {
        return {
            ...product,
            quantity: product.quantity + quantityInc,
            totalPrice: product.price.mul(product.quantity + quantityInc),
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
        quantity: quantityInc,
        price: new Big(productSubset.price),
        totalPrice: new Big(productSubset.price),
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
    const [cartStatus, setCartStatus] = useState(CART_STATUS.READY);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(new Big(0));

    const cartLoadingTimer = useRef(null);
    const cartReadyTimer = useRef(null);

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

    useEffect(() => {
        return () => {
            clearInterval(cartLoadingTimer);
            clearInterval(cartReadyTimer);
        };
    }, []);

    function updateProduct(product, quantityInc) {
        setCart((prevState) => {
            const productExists = prevState.find(
                (item) => item.title === product.title
            );

            return productExists
                ? prevState
                      .map((item) =>
                          item.id === product.id
                              ? createCartProduct(item, quantityInc)
                              : item
                      )
                      .filter((item) => item.quantity > 0)
                : [...prevState, createCartProduct(product, quantityInc)];
        });
    }

    async function updateCart(
        product,
        quantityIncrease,
        { loadingDelay = 0, readyDelay = 0 } = {}
    ) {
        if (cartStatus === CART_STATUS.UPDATING_PRODUCT) return;

        clearInterval(cartReadyTimer.current);

        setCartStatus(CART_STATUS.UPDATING_PRODUCT);

        cartLoadingTimer.current = setTimeout(() => {
            updateProduct(product, quantityIncrease);

            setCartStatus(CART_STATUS.UPDATING_PRODUCT_COMPLETE);

            cartReadyTimer.current = setTimeout(() => {
                setCartStatus(CART_STATUS.READY);
            }, readyDelay);
        }, loadingDelay);
    }

    return {
        cart,
        cartStatus,
        cartQuantity,
        cartTotalPrice,
        updateCart,
    };
};

export default useCart;
