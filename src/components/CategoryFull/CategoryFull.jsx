import React from "react";

import ProductCard from "../ProductCard/ProductCard";

import { Title, Container } from "./CategoryFull.styles";

const CategoryFull = ({ title, products }) => {
  return (
    <>
      <Title>{title.toUpperCase()}</Title>
      <Container>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Container>
    </>
  );
};

export default CategoryFull;
