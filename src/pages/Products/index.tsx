import { useContext, useEffect } from "react";
import CreateProduct from "./components/CreateProduct";
import ProductSubHeader from "./components/ProductSubHeader";
import ProductTable from "./components/ProductTable";
import styles from "./styles.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import Modal from "../../components/Modal";
import { api } from "../../services/api";

function Products() {
  const {
    state: { isAddingProduct, products },
    methods: { updateProducts },
  } = useContext(GlobalContext);

  const handleAddProduct = () => {};
  const handlePriceChange = () => {};
  const handleVisibilityChange = () => {};

  const handleGetProducts = async () => {
    try {
      const response = await api.getProducts();
      updateProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleProductCreation = () => {
    handleGetProducts();
  };

  return (
    <div className={styles.container}>
      <ProductSubHeader
        onAddProduct={handleAddProduct}
        onPriceChange={handlePriceChange}
        onVisibilityChange={handleVisibilityChange}
      />

      <ProductTable products={products} />

      {isAddingProduct ? (
        <Modal>
          <CreateProduct onCreate={handleProductCreation} />
        </Modal>
      ) : null}
    </div>
  );
}

export default Products;
