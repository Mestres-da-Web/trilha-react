import ProductSubHeader from "./components/ProductSubHeader";
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
    </div>
  );
}

export default Products;
