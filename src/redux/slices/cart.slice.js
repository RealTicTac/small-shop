import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isCartOpen: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const itemInCart = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      if (itemInCart) {
        itemInCart.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    clearItemFromCart(state, action) {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    removeItemFromCart(state, action) {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        if (itemInCart.count !== 1) {
          itemInCart.count--;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
    toggleCartOpen(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    setCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  toggleCartOpen,
  setCartOpen,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

const selectCart = (state) => state.cart;
export const selectCartOpen = createSelector(
  [selectCart],
  (state) => state.isCartOpen
);
export const selectCartItems = createSelector(
  [selectCart],
  (state) => state.items
);
export const selectTotalCount = createSelector([selectCartItems], (state) => {
  return state.reduce((acc, item) => {
    acc += item.count;
    return acc;
  }, 0);
});
export const selectTotalPrice = createSelector([selectCartItems], (state) => {
  return state.reduce((acc, item) => {
    acc += item.count * item.price;
    console.log(acc);
    return acc;
  }, 0);
});
