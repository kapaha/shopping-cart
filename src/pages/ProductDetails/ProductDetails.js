import React from 'react';
import { useParams } from 'react-router-dom';
import { useShop } from 'hooks';
import { Button, NumberInput } from 'components';

import {
    Product,
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductDescription,
    ProductInfo,
} from './ProductDetails.styled';

const ProductDetails = () => {
    const { productId } = useParams();
    const { data: product, loading, error } = useShop(productId);

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
                        value="1"
                        min="1"
                        max="9999"
                        step="1"
                        size="4"
                    />
                    <Button className="cartButton">Add To Cart</Button>
                    <ProductDescription>
                        {product.description}
                    </ProductDescription>
                </ProductInfo>
            </Product>
        </main>
    );
};

export default ProductDetails;
