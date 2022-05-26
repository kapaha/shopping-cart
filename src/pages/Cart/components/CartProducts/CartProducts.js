import React, { useState } from 'react';
import { useCartContext } from 'context';
import { useDebounce } from 'hooks';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { NumberInput, IconButton } from 'components';
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

    const { updateCart } = useCartContext();
    useDebounce(handleUpdateCart, 1000, [quantity]);

    function handleOnChange(value) {
        setQuantity(value);
    }

    function handleUpdateCart() {
        const quantityNum = Number(quantity);
        if (quantity === '' || quantityNum === product.quantity) return;
        const quantityIncrease = quantityNum - product.quantity;
        updateCart(product, quantityIncrease);
    }

    function handleBlur() {
        if (quantity === '') {
            setQuantity(product.quantity);
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
            <Price>£{product.totalPrice}</Price>
            <IconButton onClick={() => updateCart(product, -product.quantity)}>
                <FaTimes />
            </IconButton>
        </Product>
    );
};

export default CartProducts;
