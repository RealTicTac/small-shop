import React from "react";

import CategoryItem from "../CategoryItem/CategoryItem";

import { StyledCategories } from "./Categories.styles";

const Categories = ({ categories }) => {
  return (
    <StyledCategories>
      {categories.map((item) => {
        return <CategoryItem key={item.id} category={item} />;
      })}
    </StyledCategories>
  );
};

export default Categories;
