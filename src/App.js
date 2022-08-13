import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Authentication from "./pages/Authentication/Authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
