import React from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "redux/slices/categories.slice";
import CategoryPreview from "components/CategoryPreview/CategoryPreview";

const Previews = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      {categoriesMap &&
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview title={title} products={products} key={title} />
          );
        })}
    </>
  );
};

export default Previews;
