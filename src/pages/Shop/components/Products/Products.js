import React from 'react';
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
            <CardImage src={product.image} alt={product.title} />
            <CardContent>
                <Name>{product.title}</Name>
                <Price>£{product.price}</Price>
            </CardContent>
        </Card>
    );
};

export default Products;
