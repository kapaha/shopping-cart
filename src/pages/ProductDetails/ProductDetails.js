import React from 'react';
import { useParams } from 'react-router-dom';
import { formatPriceUK } from 'utils';
import { useShop } from 'hooks';
import AddToCartForm from './components/AddToCartForm';

import {
    Product,
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductDescription,
    ProductInfo,
} from './ProductDetails.styled';
import Skeleton from 'react-loading-skeleton';

const ProductDetails = () => {
    const { productId } = useParams();
    const { data: product, loading, error } = useShop(productId);

    if (loading) return <SkeletonProductDetails />;

    if (error) return <main>Error</main>;

    return (
        <main>
            <Product>
                <ProductImage src={product.image} alt={product.title} />
                <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{formatPriceUK(product.price)}</ProductPrice>
                    <AddToCartForm product={product} />
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
