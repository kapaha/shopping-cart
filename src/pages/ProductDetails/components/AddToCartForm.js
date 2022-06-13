import React, { useState, useEffect, useRef } from 'react';
import { useCartContext } from 'context';

import { CART_STATUS } from 'constants';
import { quantityValidator } from 'validators';

import { NumberInput, ErrorBanner } from 'components';
import AddToCartBtn from './AddToCartBtn';
import { Form } from './AddToCartForm.styled';

const AddToCartForm = ({ product }) => {
    const updateDelay = useRef();
    const readyDelay = useRef();

    const [quantity, setQuantity] = useState('1');
    const [cartStatus, setCartStatus] = useState(CART_STATUS.READY);
    const [error, setError] = useState('');

    const { updateCart, getItemQuantity } = useCartContext();

    useEffect(() => {
        return () => {
            clearTimeout(updateDelay.current);
            clearTimeout(readyDelay.current);
        };
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        if (cartStatus === CART_STATUS.UPDATING_PRODUCT) return;

        const quantityNum = Number(quantity);

        if (quantityNum < 1) {
            setError('Please enter a number greater than 0');
            return;
        }

        const newItemQuantity = getItemQuantity(product.id) + quantityNum;
        const { isValid, error } = quantityValidator(newItemQuantity);

        if (!isValid) {
            setError(error);
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
                onChange={(value) => setQuantity(value)}
            />
            {error && <ErrorBanner text={error} />}
            <AddToCartBtn cartStatus={cartStatus} />
        </Form>
    );
};

export default AddToCartForm;
