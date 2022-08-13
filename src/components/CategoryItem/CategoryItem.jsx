import React from "react";

import { Category, CategoryBody, BackgroundImage } from "./CategoryItem.styles";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <Category>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <CategoryBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </CategoryBody>
    </Category>
  );
};

export default CategoryItem;
