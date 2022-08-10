import React from "react";

import { Category, CategoryBody, BackgroundImage } from "./CategoryItem.styles";

const CategoryItem = ({ category }) => {
  const { image, title } = category;
  return (
    <Category>
      <BackgroundImage style={{ backgroundImage: image }}></BackgroundImage>
      <CategoryBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </CategoryBody>
    </Category>
  );
};

export default CategoryItem;
