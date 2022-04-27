import React from 'react';
import { StyledButton, Spinner, CheckCircle } from './AddToCartBtn.styled';

const ICON = Object.freeze({
    ADDING_PRODUCT: <Spinner />,
    ADDING_PRODUCT_COMPLETE: <CheckCircle />,
});

const TEXT = Object.freeze({
    READY: 'Add To Cart',
    ADDING_PRODUCT: 'Adding...',
    ADDING_PRODUCT_COMPLETE: 'Added',
});

const AddToCartBtn = ({ className, onClick, cartStatus }) => {
    return (
        <StyledButton className="cartButton" onClick={onClick}>
            {ICON[cartStatus]}
            {TEXT[cartStatus]}
        </StyledButton>
    );
};

export default AddToCartBtn;
