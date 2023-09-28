import { Route, Routes } from "react-router-dom";
import LayoutProduct from "./components/LayoutProduct";

import "./global.styles.css";

import Products from "./pages/Products";
import { GlobalContextProvider } from "./context/GlobalContext";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <GlobalContextProvider>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="product" element={<LayoutProduct />}>
          <Route path="" element={<Products />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GlobalContextProvider>
  );
}

export default App;
