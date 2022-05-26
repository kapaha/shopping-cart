import React from 'react';
import { useCartContext } from 'context';
import { CART_STATUS } from 'hooks';
import { StyledButton, Spinner, CheckCircle } from './AddToCartBtn.styled';

const ICON = Object.freeze({
    [CART_STATUS.UPDATING_PRODUCT]: <Spinner />,
    [CART_STATUS.UPDATING_PRODUCT_COMPLETE]: <CheckCircle />,
});

const TEXT = Object.freeze({
    [CART_STATUS.READY]: 'Add To Cart',
    [CART_STATUS.UPDATING_PRODUCT]: 'Adding...',
    [CART_STATUS.UPDATING_PRODUCT_COMPLETE]: 'Added',
});

const AddToCartBtn = () => {
    const { cartStatus } = useCartContext();
    return (
        <StyledButton className="cartButton" type="submit">
            {ICON[cartStatus]}
            {TEXT[cartStatus]}
        </StyledButton>
    );
};

export default AddToCartBtn;
