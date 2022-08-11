import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import Authentication from "./pages/Authentication/Authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Authentication />} />
    </Routes>
  );
};

export default App;
