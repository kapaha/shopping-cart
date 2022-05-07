import { useState, useRef } from 'react';

const CART_LOADING_DELAY = 1500; // ms
const CART_READY_DELAY = 4000; // ms
const CART_STATUS = Object.freeze({
    READY: 'READY',
    ADDING_PRODUCT: 'ADDING_PRODUCT',
    ADDING_PRODUCT_COMPLETE: 'ADDING_PRODUCT_COMPLETE',
});

const useCart = () => {
    const [cart, setCart] = useState([]);
    const [cartStatus, setCartStatus] = useState(CART_STATUS.READY);
    const [cartQuantity, setCartQuanitty] = useState(0);

    const cartReadyTimer = useRef(null);

    function incCartProductQuantity(product, quantity) {
        quantity = Number(quantity);

        setCart((prevState) => {
            // check if cart already contains the product
            const containsProduct = cart.find(
                (item) => item.title === product.title
            );

            // if it does increase its quantity
            if (containsProduct) {
                return prevState.map((item) =>
                    item.title === product.title
                        ? { ...product, quantity: item.quantity + quantity }
                        : item
                );
            }

            // if it doesnt add the item and quantity to the cart
            return [...prevState, { ...product, quantity }];
        });
    }

    function addToCart(product, quantity) {
        if (cartStatus === CART_STATUS.ADDING_PRODUCT) return;

        clearInterval(cartReadyTimer.current);

        setCartStatus(CART_STATUS.ADDING_PRODUCT);

        setTimeout(() => {
            incCartProductQuantity(product, quantity);

            setCartQuanitty((prevState) => prevState + Number(quantity));

            setCartStatus(CART_STATUS.ADDING_PRODUCT_COMPLETE);

            cartReadyTimer.current = setTimeout(() => {
                setCartStatus(CART_STATUS.READY);
            }, CART_READY_DELAY);
        }, CART_LOADING_DELAY);
    }

    return {
        cart,
        cartStatus,
        cartQuantity,
        addToCart,
    };
};

export default useCart;
