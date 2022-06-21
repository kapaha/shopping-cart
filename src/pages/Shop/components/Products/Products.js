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
    SkeletonCard,
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
        <SkeletonCard>
            <Skeleton
                containerClassName="skeleton-container skeleton-img-container"
                className="skeleton-img"
            />
            <CardContent>
                <Skeleton
                    containerClassName="skeleton-container skeleton-name-container"
                    className="skeleton-name"
                    count="2"
                />
                <Price>
                    <Skeleton
                        containerClassName="skeleton-container skeleton-price-container"
                        className="skeleton-price"
                    />
                </Price>
            </CardContent>
        </SkeletonCard>
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
