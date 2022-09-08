import { useDispatch, useSelector } from "react-redux";

import {
  selectTotalCount,
  setCartOpen,
  selectCartOpen,
} from "../../redux/slices/cart.slice";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

import { CartCount, Container } from "./CartIcon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectTotalCount);
  const isCartOpen = useSelector(selectCartOpen);
  const onCartOpenHandler = () => {
    if (!isCartOpen) dispatch(setCartOpen(true));
  };
  return (
    <Container onClick={onCartOpenHandler}>
      <Icon />
      <CartCount>{cartTotal}</CartCount>
    </Container>
  );
};

export default CartIcon;
