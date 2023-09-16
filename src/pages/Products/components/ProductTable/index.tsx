import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ReactComponent as ProductIcon } from "../../../../assets/Icons/macbook.svg";
import TableHead from "./components/TableHead";
import TableRow from "./components/TableRow";
import { IProduct } from "../../../../domain/models/product";
import { api } from "../../../../services/api";

function ProductTable() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.getProducts();
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.tableContainer}>
        <TableHead
          headings={[
            "Nome do produto",
            "Marca",
            "#ID",
            "Entregue por",
            "Qº Estoque",
            "Preço",
          ]}
        />

        {products.map((product) => (
          <TableRow
            icon={ProductIcon}
            name={product.name}
            brand="Mestres da web"
            id="111"
            delivered_by="Amazon"
            quantity="333"
            price="3939"
          />
        ))}
      </table>
    </div>
  );
}

export default ProductTable;
