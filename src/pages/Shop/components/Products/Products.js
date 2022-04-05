import React from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Card,
    CardImage,
    CardContent,
    Name,
    Price,
} from './Products.styled';

const Products = ({ products }) => {
    return (
        <Grid>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </Grid>
    );
};

const Product = ({ product }) => {
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
                <Price>£{product.price}</Price>
            </CardContent>
        </Card>
    );
};

export default Products;
