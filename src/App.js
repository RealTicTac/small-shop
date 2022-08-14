import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Authentication from "./pages/Authentication/Authentication";
import Previews from "./pages/Previews/Previews";
import Category from "./pages/Category/Category";
import Shop from "./pages/Shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}>
          <Route index element={<Previews />} />
          <Route path=":category" element={<Category />} />
        </Route>
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
