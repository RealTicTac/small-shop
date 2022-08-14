import React from "react";
import { useParams } from "react-router-dom";

import CategoryFull from "../../components/CategoryFull/CategoryFull";

const Category = () => {
  const { category } = useParams();
  return (
    <>
      <CategoryFull category={category} />
    </>
  );
};

export default Category;
