import React from 'react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { NumberInput, IconButton } from 'components';
import {
    ProductsContainer,
    Product,
    ProductImage,
    ProductName,
    ProductQuantity,
    ProductPrice,
} from './CartNotEmpty.styled';

const CartNotEmpty = ({ cart }) => {
    return (
        <ProductsContainer>
            {cart.map((product) => {
                return (
                    <Product key={product.title}>
                        <ProductImage src={product.image} />
                        <ProductName>{product.title}</ProductName>
                        <ProductQuantity>
                            <IconButton>
                                <FaMinus />
                            </IconButton>
                            <NumberInput
                                inputId="quantity"
                                value={product.quantity}
                                min="1"
                                max="40"
                                step="1"
                            />
                            <IconButton>
                                <FaPlus />
                            </IconButton>
                        </ProductQuantity>
                        <ProductPrice>£{product.price}</ProductPrice>
                        <IconButton>
                            <FaTimes />
                        </IconButton>
                    </Product>
                );
            })}
        </ProductsContainer>
    );
};

export default CartNotEmpty;
