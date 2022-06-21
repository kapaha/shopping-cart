import React, { useState } from 'react';
import { useCartContext } from 'context';
import { useDebounce } from 'hooks';
import { formatPriceUK } from 'utils';
import { quantityValidator } from 'validators';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';
import { NumberInput, IconButton, ErrorBanner } from 'components';
import {
    Container,
    Product,
    Image,
    Name,
    Quantity,
    Price,
} from './CartProducts.styled';

const ERROR_BANNER_ID = 'cartQuantityError';

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

    const { updateCart, cartQuantity } = useCartContext();
    useDebounce(handleUpdateCart, 500, [quantity]);

    function handleOnChange(value) {
        setQuantity(value);
        setError('');
    }

    function handleOnError(msg) {
        setError(msg);
        setQuantity(product.quantity);
    }

    function handleUpdateCart() {
        const quantityNum = Number(quantity);

        if (quantity === '' || quantityNum === product.quantity) return;

        const { isValid, error } = quantityValidator(
            product.quantity,
            quantityNum,
            cartQuantity
        );

        if (!isValid) {
            handleOnError(error);
            return;
        }

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
        setError('');
    }

    return (
        <Product className={error && 'error'}>
            <Image src={product.image} alt="" />
            <Name>{product.title}</Name>
            <Quantity>
                <IconButton
                    onClick={() => handleClick(-1)}
                    className="btn btn-minus"
                    aria-label={`Remove 1 of ${product.title}`}
                >
                    <AiOutlineMinus />
                </IconButton>
                <NumberInput
                    inputId="quantity"
                    value={quantity}
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    isCartInput
                    ariaLabel={`Quantity for ${product.title}`}
                />
                <IconButton
                    onClick={() => handleClick(1)}
                    className="btn btn-plus"
                    aria-label={`Add 1 of ${product.title}`}
                >
                    <AiOutlinePlus />
                </IconButton>
            </Quantity>
            <Price
                aria-label={`Price for ${product.quantity} ${product.title}`}
            >
                {formatPriceUK(product.totalPrice)}
            </Price>
            <div className="btn-container">
                <IconButton
                    onClick={() => updateCart(product, 0)}
                    className="btn btn-delete"
                    aria-label={`Remove all of ${product.title}`}
                >
                    <AiOutlineClose />
                </IconButton>
            </div>
            {error && (
                <ErrorBanner
                    text={error}
                    id={ERROR_BANNER_ID}
                    ariaLive="polite"
                    className="cart-error"
                />
            )}
        </Product>
    );
};

export default CartProducts;
