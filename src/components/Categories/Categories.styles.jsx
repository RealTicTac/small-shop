import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const CategoriesContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  width: 30%;
`;
