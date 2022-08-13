import React from "react";

import CategoryItem from "../CategoryItem/CategoryItem";

import { CategoriesContainer } from "./Categories.styles";

const Categories = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((item) => {
        return <CategoryItem key={item.id} category={item} />;
      })}
    </CategoriesContainer>
  );
};

export default Categories;
