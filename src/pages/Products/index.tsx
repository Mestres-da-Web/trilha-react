import { useContext, useEffect, useState } from "react";
import CreateProduct from "./components/CreateProduct";
import ProductSubHeader from "./components/ProductSubHeader";
import ProductTable from "./components/ProductTable";
import styles from "./styles.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import Modal from "../../components/Modal";
import { api } from "../../services/api";
import DeleteProduct from "./components/DeleteProduct";

function Products() {
  const {
    state: { isAddingProduct, products },
    methods: { updateProducts },
  } = useContext(GlobalContext);

  const [productIdToDelete, setProductIdToDelete] = useState<
    undefined | string
  >(undefined);

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

  const handleDeletePress = (id: string) => {
    setProductIdToDelete(id);
  };

  const handleFinishDeleteProduct = () => {
    setProductIdToDelete(undefined);
  };

  const handleDeleteProduct = () => {
    if (productIdToDelete) {
      api.deleteProduct(productIdToDelete);
    }
  };

  return (
    <div className={styles.container}>
      <ProductSubHeader
        onAddProduct={handleAddProduct}
        onPriceChange={handlePriceChange}
        onVisibilityChange={handleVisibilityChange}
      />

      <ProductTable products={products} onDelete={handleDeletePress} />

      {isAddingProduct ? (
        <Modal>
          <CreateProduct onCreate={handleProductCreation} />
        </Modal>
      ) : null}

      {productIdToDelete ? (
        <Modal>
          <DeleteProduct
            onConfirm={handleDeleteProduct}
            onFinish={handleFinishDeleteProduct}
          />
        </Modal>
      ) : null}
    </div>
  );
}

export default Products;
