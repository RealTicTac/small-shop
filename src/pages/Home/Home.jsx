import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Categories from "components/Categories/Categories";

import { selectCategoriesList } from "redux/slices/categories.slice";

const Home = () => {
  const categories = useSelector(selectCategoriesList);
  return <Categories categories={categories} />;
};

export default Home;
