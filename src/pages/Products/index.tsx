import { useContext } from "react";
import CreateProduct from "./components/CreateProduct";
import ProductSubHeader from "./components/ProductSubHeader";
import ProductTable from "./components/ProductTable";
import styles from "./styles.module.css";
import { GlobalContext } from "../../context/GlobalContext";

function Products() {
  const {
    state: { isAddingProduct },
  } = useContext(GlobalContext);

  const handleAddProduct = () => {};
  const handlePriceChange = () => {};
  const handleVisibilityChange = () => {};

  return (
    <div className={styles.container}>
      <ProductSubHeader
        onAddProduct={handleAddProduct}
        onPriceChange={handlePriceChange}
        onVisibilityChange={handleVisibilityChange}
      />

      <ProductTable />

      <br />
      <br />
      <br />

      {isAddingProduct ? <CreateProduct /> : null}
    </div>
  );
}

export default Products;
