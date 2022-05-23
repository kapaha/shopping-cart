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
    const [cartQuantity, setCartQuantity] = useState(0);

    const cartReadyTimer = useRef(null);

    function updateProductQuantity(product, quantity) {
        setCart((prevState) => {
            const cartContainsProduct = cart.find(
                (item) => item.title === product.title
            );

            // Update quantity of product if it exists
            // Else create and add new product
            // filter out all products with a quantity <= 0
            return cartContainsProduct
                ? prevState
                      .map((item) =>
                          item.title === product.title
                              ? {
                                    ...product,
                                    quantity: quantity,
                                    totalPrice: item.price * quantity,
                                }
                              : item
                      )
                      .filter((item) => item.quantity > 0)
                : [
                      ...prevState,
                      {
                          ...product,
                          quantity,
                          totalPrice: product.price * quantity,
                      },
                  ];
        });
    }

    function updateCart(
        product,
        quantity,
        cartLoadingDelay = CART_LOADING_DELAY,
        cartReadyDelay = CART_READY_DELAY
    ) {
        quantity = Number(quantity);

        // return if cart is already updating a product
        if (cartStatus === CART_STATUS.ADDING_PRODUCT) return;

        // reset the cart ready timer
        clearInterval(cartReadyTimer.current);

        // set cart status to updating product
        setCartStatus(CART_STATUS.ADDING_PRODUCT);

        setTimeout(() => {
            // update the product quantity by a certain amount
            updateProductQuantity(product, quantity);

            // update the cart quantity by a a certain amount
            setCartQuantity((prevState) => prevState + quantity);

            // set the cart status to updating complete
            setCartStatus(CART_STATUS.ADDING_PRODUCT_COMPLETE);

            cartReadyTimer.current = setTimeout(() => {
                // set the carts status to ready
                setCartStatus(CART_STATUS.READY);
            }, cartReadyDelay);
        }, cartLoadingDelay);
    }

    return {
        cart,
        cartStatus,
        cartQuantity,
        updateCart,
    };
};

export default useCart;
