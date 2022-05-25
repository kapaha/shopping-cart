import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from 'context';
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
    ProductForm,
} from './ProductDetails.styled';
import Skeleton from 'react-loading-skeleton';

const ProductDetails = () => {
    const { productId } = useParams();
    const { updateCart } = useCartContext();
    const { data: product, loading, error } = useShop(productId);

    const [quantity, setQuantity] = useState('1');

    function handleSubmit(e) {
        e.preventDefault();
        updateCart(product, quantity, { loadingDelay: 1000, readyDelay: 3000 });
    }

    if (loading) return <SkeletonProductDetails />;

    if (error) return <main>Error</main>;

    return (
        <main>
            <Product>
                <ProductImage src={product.image} alt={product.title} />
                <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>£{product.price}</ProductPrice>
                    <ProductForm onSubmit={handleSubmit}>
                        <NumberInput
                            className="numberInput"
                            labelText="Quantity:"
                            inputId="quantity"
                            value={quantity}
                            onChange={(value) => setQuantity(value)}
                        />
                        <AddToCartBtn />
                    </ProductForm>
                    <ProductDescription>
                        {product.description}
                    </ProductDescription>
                </ProductInfo>
            </Product>
        </main>
    );
};

const SkeletonProductDetails = () => {
    return (
        <main>
            <Product>
                <Skeleton
                    containerClassName="skeleton-img-container"
                    className="skeleton-img"
                />
                <ProductInfo>
                    <ProductTitle>
                        <Skeleton count={2} />
                    </ProductTitle>
                    <ProductPrice>
                        <Skeleton className="skeleton-price" />
                    </ProductPrice>
                    <div className="skeleton-number-input">
                        <Skeleton className="skeleton-quantity" />
                        <Skeleton className="skeleton-input" />
                    </div>
                    <Skeleton
                        containerClassName="skeleton-btn-container"
                        className="skeleton-btn"
                    />
                    <ProductDescription>
                        <Skeleton count={5} />
                    </ProductDescription>
                </ProductInfo>
            </Product>
        </main>
    );
};

export default ProductDetails;
