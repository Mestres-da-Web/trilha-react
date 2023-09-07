import { useContext } from "react";
import { Button } from "../../../../components/Button";
import { GlobalContext } from "../../../../context/GlobalContext";
import InputPriceRange from "./components/InputPriceRange";
import Title from "./components/Title";
import VisibilityFilter from "./components/VisibilityFilter";
import styles from "./styles.module.css";
import { ReactComponent as PlusIcon } from "../../../../assets/Icons/plus.svg";

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
  const {
    methods: { startAddingProduct },
  } = useContext(GlobalContext);

  const handleClick = () => {
    startAddingProduct();
  };

  return (
    <div className={styles.container}>
      <Title />
      <VisibilityFilter onVisibilityChange={onVisibilityChange} />
      <InputPriceRange onPriceChange={onPriceChange} />
      <Button.Root onClick={handleClick}>
        <Button.Icon icon={PlusIcon} />
        <Button.Text text="Adicionar produto" />
      </Button.Root>
    </div>
  );
}

export default ProductSubHeader;
