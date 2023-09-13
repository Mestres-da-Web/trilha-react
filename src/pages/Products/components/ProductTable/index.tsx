import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ReactComponent as ProductIcon } from "../../../../assets/Icons/macbook.svg";
import TableHead from "./components/TableHead";
import TableRow from "./components/TableRow";

interface IProduct {
  id: string;
  name: string;
  brand_id: string;
  specification_id: string;
}

function ProductTable() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/products", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setProducts(data.results));
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
