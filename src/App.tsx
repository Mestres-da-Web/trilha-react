import { Route, Routes } from "react-router-dom";
import LayoutProduct from "./components/LayoutProduct";

import "./global.styles.css";

import Products from "./pages/Products";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Routes>
        <Route path="/" element={<LayoutProduct />}>
          <Route path="product" element={<Products />} />
        </Route>
      </Routes>
    </GlobalContextProvider>
  );
}

export default App;
