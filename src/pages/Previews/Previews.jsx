import React from "react";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const Previews = () => {
  const categoriesMap = {};
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview title={title} products={products} key={title} />
        );
      })}
    </>
  );
};

export default Previews;
