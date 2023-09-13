import { useContext } from "react";
import CreateProduct from "./components/CreateProduct";
import ProductSubHeader from "./components/ProductSubHeader";
import ProductTable from "./components/ProductTable";
import styles from "./styles.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import Modal from "../../components/Modal";
import { ReactComponent as PlusIcon } from "../../assets/Icons/plus.svg";
import { Button } from "../../components/Button";

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

      {isAddingProduct ? (
        <Modal>
          <CreateProduct />
        </Modal>
      ) : null}
    </div>
  );
}

export default Products;
