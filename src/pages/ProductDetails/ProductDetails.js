import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useShop } from 'hooks';
import { NumberInput } from 'components';
import AddToCartBtn from './components/AddToCartBtn';

import {
    Product,
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductDescription,
    ProductInfo,
} from './ProductDetails.styled';

const ProductDetails = ({ cartStatus, addToCart }) => {
    const { productId } = useParams();

    const { data: product, loading, error } = useShop(productId);

    const [quantity, setQuantity] = useState('1');

    function handleQuantity(e) {
        setQuantity(e.target.value);
    }

    if (loading) return 'loading';

    if (error) return 'error';

    return (
        <main>
            <Product>
                <ProductImage src={product.image} alt={product.title} />
                <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>£{product.price}</ProductPrice>
                    <NumberInput
                        className="numberInput"
                        inputId="quantity"
                        LabelText="Quantity:"
                        value={quantity}
                        min="1"
                        max="9999"
                        step="1"
                        size="4"
                        onChange={handleQuantity}
                    />
                    <AddToCartBtn
                        onClick={() => addToCart(product, quantity)}
                        cartStatus={cartStatus}
                    />
                    <ProductDescription>
                        {product.description}
                    </ProductDescription>
                </ProductInfo>
            </Product>
        </main>
    );
};

export default ProductDetails;
