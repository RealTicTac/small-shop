import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default App;
