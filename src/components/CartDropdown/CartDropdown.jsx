import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";

import { Container, CartItems } from "./CartDropdown.styles";

const CartDropbox = () => {
  return (
    <Container>
      <CartItems>
        {[].map((item) => (
          <CartItem product={item} key={item.title} />
        ))}
      </CartItems>
      <Button>go to checkout</Button>
    </Container>
  );
};

export default CartDropbox;
