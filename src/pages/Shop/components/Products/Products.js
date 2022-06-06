import React from 'react';
import { formatPriceUK } from 'utils';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import {
    Grid,
    Card,
    CardImage,
    CardContent,
    Name,
    Price,
} from './Products.styled';

const Products = ({ products, loading }) => {
    if (loading) {
        return (
            <Grid>
                {Array.from(Array(10)).map((_, index) => (
                    <SkeletonProduct key={index} />
                ))}
            </Grid>
        );
    }

    return (
        <Grid>
            {products.map((product) => (
                <Product key={product.id} product={product} loading={loading} />
            ))}
        </Grid>
    );
};

const SkeletonProduct = () => {
    return (
        <Card>
            <Skeleton
                containerClassName="skeleton-container"
                className="skeleton-img"
            />
            <div className="skeleton-card-content">
                <Skeleton
                    containerClassName="skeleton-container"
                    className="skeleton-text"
                />
                <Skeleton
                    containerClassName="skeleton-container"
                    className="skeleton-text"
                />
                <Skeleton
                    containerClassName="skeleton-container"
                    className="skeleton-text skeleton-price"
                />
            </div>
        </Card>
    );
};

const Product = ({ product, loading }) => {
    return (
        <Card>
            <Link
                className="product-link"
                aria-label={product.title}
                to={`/shop/${product.id}`}
            />
            <CardImage src={product.image} alt={product.title} />
            <CardContent>
                <Name>{product.title}</Name>
                <Price>{formatPriceUK(product.price)}</Price>
            </CardContent>
        </Card>
    );
};

export default Products;
