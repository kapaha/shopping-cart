import React, { useState, useEffect, useRef } from 'react';
import { useCartContext } from 'context';

import { CART_STATUS } from 'constants';
import { quantityValidator } from 'validators';

import { NumberInput, ErrorBanner } from 'components';
import AddToCartBtn from './AddToCartBtn';
import { Form } from './AddToCartForm.styled';

const ERROR_BANNER_ID = 'addToCartFormError';

const AddToCartForm = ({ product }) => {
    const updateDelay = useRef();
    const readyDelay = useRef();
    const quantityInput = useRef();

    const [quantity, setQuantity] = useState('1');
    const [cartStatus, setCartStatus] = useState(CART_STATUS.READY);
    const [error, setError] = useState('');

    const { updateCart, getItemQuantity, cartQuantity } = useCartContext();

    useEffect(() => {
        return () => {
            clearTimeout(updateDelay.current);
            clearTimeout(readyDelay.current);
        };
    }, []);

    function handleOnChange(value) {
        setQuantity(value);
        setError('');
    }

    function handleError(msg) {
        setError(msg);
        quantityInput.current.focus();
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (cartStatus === CART_STATUS.UPDATING_PRODUCT) return;

        const quantityNum = Number(quantity);

        if (quantityNum < 1) {
            handleError('Please enter a number greater than 0');
            return;
        }

        const cartItemQuantity = getItemQuantity(product.id);
        const newItemQuantity = cartItemQuantity + quantityNum;

        const { isValid, error } = quantityValidator(
            cartItemQuantity,
            newItemQuantity,
            cartQuantity
        );

        if (!isValid) {
            handleError(error);
            return;
        }

        clearTimeout(readyDelay.current);

        setError('');
        setCartStatus(CART_STATUS.UPDATING_PRODUCT);

        updateDelay.current = setTimeout(() => {
            updateCart(product, newItemQuantity, handleCartOnUpdate);
        }, 1000);
    }

    function handleCartOnUpdate() {
        setCartStatus(CART_STATUS.UPDATING_PRODUCT_COMPLETE);

        readyDelay.current = setTimeout(() => {
            setCartStatus(CART_STATUS.READY);
        }, 3000);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <NumberInput
                className="numberInput"
                labelText="Quantity:"
                inputId="quantity"
                value={quantity}
                onChange={handleOnChange}
                ariaDescribedby={ERROR_BANNER_ID}
                ariaInvalid={!!error}
                inputRef={quantityInput}
            />
            {error && <ErrorBanner text={error} id={ERROR_BANNER_ID} />}
            <AddToCartBtn cartStatus={cartStatus} />
        </Form>
    );
};

export default AddToCartForm;
