import { useState, useEffect, useRef } from 'react';

export const CART_STATUS = Object.freeze({
    READY: 'ready',
    UPDATING_PRODUCT: 'updating-product',
    UPDATING_PRODUCT_COMPLETE: 'updating-product-complete',
});

const useCart = () => {
    const [cart, setCart] = useState([
        {
            // DUMMY DATA
            id: 2,
            title: 'Mens Casual Premium Slim Fit T-Shirts ',
            price: 22.3,
            description:
                'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
            category: "men's clothing",
            image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            rating: {
                rate: 4.1,
                count: 259,
            },
            quantity: 1,
            totalPrice: 22.3,
        },
    ]);
    const [cartStatus, setCartStatus] = useState(CART_STATUS.READY);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

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
                (totalPrice, product) =>
                    totalPrice + product.quantity * product.price,
                0
            )
        );
    }, [cart]);

    useEffect(() => {
        return () => {
            clearInterval(cartLoadingTimer);
            clearInterval(cartReadyTimer);
        };
    }, []);

    function createNewProduct(
        product,
        quantity = 1,
        totalPrice = product.price
    ) {
        return {
            ...product,
            quantity,
            totalPrice,
        };
    }

    function updateProductQuantity(product, quantityIncrease) {
        quantityIncrease = Number(quantityIncrease);

        setCart((prevState) => {
            const productExists = prevState.find(
                (item) => item.title === product.title
            );

            return productExists
                ? prevState
                      .map((item) =>
                          item.id === product.id
                              ? createNewProduct(
                                    item,
                                    item.quantity + quantityIncrease,
                                    item.price *
                                        (item.quantity + quantityIncrease)
                                )
                              : item
                      )
                      .filter((item) => item.quantity > 0)
                : [...prevState, createNewProduct(product)];
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
            updateProductQuantity(product, quantityIncrease);

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
