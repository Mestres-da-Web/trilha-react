import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ReactComponent as ProductIcon } from "../../../../assets/Icons/macbook.svg";

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
        <tr>
          <th>Nome do produto</th>
          <th>Marca</th>
          <th>#ID</th>
          <th>Entregue por</th>
          <th>Qº Estoque</th>
          <th>Preço</th>
        </tr>

        {products.map((product) => (
          <tr className={styles.row}>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                paddingLeft: 50,
                marginBlock: 10,
              }}
            >
              <ProductIcon />
              {product.name}
            </td>
            <td>Mestres da web</td>
            <td>111</td>
            <td>Amazon</td>
            <td>234</td>
            <td>100</td>
            <td>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ProductTable;
