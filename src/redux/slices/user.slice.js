import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  userInfo: {
    shippingAddress: "",
    firstName: "",
    lastName: "",
    email: "",
    displayName: "",
    createdAt: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
    },
    clearUser(state, action) {
      return initialState;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const { setUser, clearUser, setUserInfo } = userSlice.actions;

export default userSlice.reducer;

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (state) => state.currentUser
);

export const selectUserInfo = createSelector(
  selectUser,
  (user) => user.userInfo
);
