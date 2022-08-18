import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const initialState = {
  items: [],
  status: "idle",
};

const FETCH_STATUSES = {
  loading: "loading",
  idle: "idle",
  success: "success",
  failed: "failed",
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await getCategoriesAndDocuments();
    return response;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = FETCH_STATUSES.loading;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = FETCH_STATUSES.success;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = FETCH_STATUSES.failed;
        throw new Error(
          `There is something wrong with your request: ${action.payload}`
        );
      });
  },
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;

const selectCategories = (state) => {
  return state.categories;
};
export const selectCategoriesItems = createSelector(
  [selectCategories],
  (state) => state.items
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesItems],
  (state) => {
    return state.reduce((acc, item) => {
      const { title, items } = item;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCategoriesList = createSelector(
  [selectCategories],
  (state) => {
    return state.items.reduce((acc, item) => {
      const { title, imageUrl } = item;
      acc.push({ title, imageUrl });
      return acc;
    }, []);
  }
);

export const byId = (id) => (state) => selectItemByIdTest(state, id);

const selectItemByIdTest = createSelector(
  [selectCategories, (_, id) => id],
  (categories, id) => {
    let itemById = undefined;
    categories.items.forEach((category) => {
      itemById = itemById || category.items.find((item) => item.id === id);
    });
    console.log("reselected");
    return itemById;
  }
);

export const selectItemById = (id) =>
  createSelector([selectCategories], (state) => {
    let itemById = undefined;
    state.items.forEach((category) => {
      itemById = itemById || category.items.find((item) => item.id === id);
    });
    console.log("reselected");
    return itemById;
  });
