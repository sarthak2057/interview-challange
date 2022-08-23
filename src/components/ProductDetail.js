import React from 'react';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import Container from '../assets/wrapper/Product';

const ProductDetail = ({product}) => {
  return (
    <Container>
      <ProductImage image={product.image} />
      <ProductInfo product={product}/>
    </Container>
  );
};

export default ProductDetail;
