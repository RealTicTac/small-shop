import { createSlice, createSelector, current } from "@reduxjs/toolkit";

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
    toggleCartOpen(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  toggleCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.items;
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
