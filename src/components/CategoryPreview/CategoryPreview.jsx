import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";

import { Container, Title, Preview } from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <Container>
      <Title>
        <Link to={title}>{title}</Link>
      </Title>
      <Preview>
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
      </Preview>
    </Container>
  );
};

export default CategoryPreview;
