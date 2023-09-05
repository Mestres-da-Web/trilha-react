import Button from "./components/Button";
import InputPriceRange from "./components/InputPriceRange";
import Title from "./components/Title";
import VisibilityFilter from "./components/VisibilityFilter";
import styles from "./styles.module.css";

interface ProductSubHeaderProps {
  onVisibilityChange(): void;
  onPriceChange(): void;
  onAddProduct(): void;
}

function ProductSubHeader({
  onVisibilityChange,
  onPriceChange,
  onAddProduct,
}: ProductSubHeaderProps) {
  return (
    <div className={styles.container}>
      <Title />
      <VisibilityFilter onVisibilityChange={onVisibilityChange} />
      <InputPriceRange onPriceChange={onPriceChange} />
      <Button onAddProduct={onAddProduct} />
    </div>
  );
}

export default ProductSubHeader;
