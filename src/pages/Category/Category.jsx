import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCategoriesMap } from "src/redux/slices/categories.slice";
import CategoryFull from "../../components/CategoryFull/CategoryFull";

const Category = () => {
  const { category } = useParams();
  const categoryMap = useSelector(selectCategoriesMap);
  return (
    <>
      <CategoryFull
        title={category}
        products={categoryMap[category.toLowerCase()]}
      />
    </>
  );
};

export default Category;
