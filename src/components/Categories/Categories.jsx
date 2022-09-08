import CategoryItem from "../CategoryItem/CategoryItem";

import { CategoriesContainer } from "./Categories.styles";

const Categories = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories &&
        categories.map((item) => {
          return <CategoryItem key={item.title} category={item} />;
        })}
    </CategoriesContainer>
  );
};

export default Categories;
