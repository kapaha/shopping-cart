import { MAX_PRODUCT_QUANTITY, MAX_CART_QUANTITY } from 'constants';

const validators = [
    {
        failsWith: (quantity) => !Number.isInteger(quantity) || quantity < 0,
        errorMsg: 'Please enter a positive whole number',
    },
    {
        failsWith: (quantity) => quantity > MAX_CART_QUANTITY,
        errorMsg: `Cannot exceed max product quantity of ${MAX_CART_QUANTITY}`,
    },
    {
        failsWith: (quantity) => quantity > MAX_PRODUCT_QUANTITY,
        errorMsg: `Cannot exceed max product quantity of ${MAX_PRODUCT_QUANTITY}`,
    },
];

export const quantityValidator = (quantity) => {
    let error = '';

    const isValid = !validators.some((validator) => {
        if (validator.failsWith(quantity)) {
            error = validator.errorMsg;
            return true;
        }

        return false;
    });

    return { isValid, error };
};
