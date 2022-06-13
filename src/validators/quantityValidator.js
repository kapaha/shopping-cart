import { MAX_PRODUCT_QUANTITY, MAX_CART_QUANTITY } from 'constants';

const validators = [
    {
        failsWith: ({ newQuantity }) =>
            !Number.isInteger(newQuantity) || newQuantity < 0,
        errorMsg: 'Please enter a positive whole number',
    },
    {
        failsWith: ({ newQuantity }) => newQuantity > MAX_PRODUCT_QUANTITY,
        errorMsg: `Cannot exceed max product quantity of ${MAX_PRODUCT_QUANTITY}`,
    },
    {
        failsWith: ({ previousQuantity, newQuantity, cartTotalQuantity }) => {
            const quantityDiff = newQuantity - previousQuantity;

            return cartTotalQuantity + quantityDiff > MAX_CART_QUANTITY;
        },
        errorMsg: `Cannot exceed max cart quantity of ${MAX_CART_QUANTITY}`,
    },
];

export const quantityValidator = (
    previousQuantity,
    newQuantity,
    cartTotalQuantity
) => {
    let error = '';

    const isValid = !validators.some((validator) => {
        if (
            validator.failsWith({
                previousQuantity,
                newQuantity,
                cartTotalQuantity,
            })
        ) {
            error = validator.errorMsg;
            return true;
        }

        return false;
    });

    return { isValid, error };
};
