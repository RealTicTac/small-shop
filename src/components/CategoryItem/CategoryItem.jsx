import React from "react";
import { Link } from "react-router-dom";

import { Category, CategoryBody, BackgroundImage } from "./CategoryItem.styles";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <Category to={`/shop/${title}/`}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <CategoryBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </CategoryBody>
    </Category>
  );
};

export default CategoryItem;
