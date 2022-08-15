import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Authentication from "./pages/Authentication/Authentication";
import Previews from "./pages/Previews/Previews";
import Category from "./pages/Category/Category";
import Shop from "./pages/Shop/Shop";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setUser } from "./redux/slices/user.slice";
import { fetchCategories } from "./redux/slices/categories.slice";
import Checkout from "./pages/Checkout/Checkout";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const unsub = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setUser(user));
    });
    return unsub;
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}>
          <Route index element={<Previews />} />
          <Route path=":category" element={<Category />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
