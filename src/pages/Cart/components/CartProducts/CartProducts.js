import React, { useState } from 'react';
import { useCartContext } from 'context';
import { useDebounce } from 'hooks';
import { formatPriceUK } from 'utils';
import { quantityValidator } from 'validators';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { NumberInput, IconButton, ErrorBanner } from 'components';
import {
    Container,
    Product,
    Image,
    Name,
    Quantity,
    Price,
} from './CartProducts.styled';

const CartProducts = () => {
    const { cart } = useCartContext();

    return (
        <Container>
            {cart.map((product) => (
                <CartProduct key={product.id} product={product} />
            ))}
        </Container>
    );
};

const CartProduct = ({ product }) => {
    const [quantity, setQuantity] = useState(product.quantity);
    const [error, setError] = useState('');

    const { updateCart } = useCartContext();
    useDebounce(handleUpdateCart, 1000, [quantity]);

    function handleOnChange(value) {
        setQuantity(value);
    }

    function handleOnError(msg) {
        setError(msg);
        setQuantity(product.quantity);
    }

    function handleUpdateCart() {
        const quantityNum = Number(quantity);

        if (quantity === '' || quantityNum === product.quantity) return;

        const { isValid, error } = quantityValidator(quantityNum);

        if (!isValid) {
            handleOnError(error);
            return;
        }

        setError('');

        updateCart(product, quantityNum);
    }

    function handleBlur() {
        if (quantity === '') {
            setQuantity(product.quantity);
            setError('');
        }
    }

    function handleClick(increment) {
        setQuantity((prevState) => {
            const newQuantity = Number(prevState) + increment;
            return newQuantity < 0 ? 0 : newQuantity;
        });
    }

    return (
        <Product>
            <Image src={product.image} />
            <Name>{product.title}</Name>
            <Quantity>
                <IconButton onClick={() => handleClick(-1)}>
                    <FaMinus />
                </IconButton>
                <NumberInput
                    inputId="quantity"
                    value={quantity}
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                />
                <IconButton onClick={() => handleClick(1)}>
                    <FaPlus />
                </IconButton>
            </Quantity>
            <Price>{formatPriceUK(product.totalPrice.toString())}</Price>
            <IconButton onClick={() => updateCart(product, 0)}>
                <FaTimes />
            </IconButton>
            {error && <ErrorBanner text={error} />}
        </Product>
    );
};

export default CartProducts;
