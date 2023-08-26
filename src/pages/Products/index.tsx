import ProductSubHeader from "./components/ProductSubHeader";
import ProductTable from "./components/ProductTable";
import styles from "./styles.module.css";

function Products() {
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
    </div>
  );
}

export default Products;
