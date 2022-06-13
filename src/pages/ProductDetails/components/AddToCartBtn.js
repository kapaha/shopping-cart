import React from 'react';
import { CART_STATUS } from 'constants';
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

const AddToCartBtn = ({ cartStatus }) => {
    return (
        <StyledButton className="cartButton" type="submit">
            {ICON[cartStatus]}
            {TEXT[cartStatus]}
        </StyledButton>
    );
};

export default AddToCartBtn;
