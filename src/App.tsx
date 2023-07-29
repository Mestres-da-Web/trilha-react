import { Route, Routes } from "react-router-dom";
import LayoutProduct from "./components/LayoutProduct";

import "./global.styles.css";

import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutProduct />}>
        <Route path="product" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
