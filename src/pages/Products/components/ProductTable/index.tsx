import { ReactComponent as ProductIcon } from "../../../../assets/Icons/macbook.svg";
import { IProduct } from "../../../../domain/models/product";
import TableHead from "./components/TableHead";
import TableRow from "./components/TableRow";
import styles from "./styles.module.css";

interface ProductTableProps {
  products: IProduct[];
}

function ProductTable({ products }: ProductTableProps) {
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
