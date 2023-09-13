import styles from "./styles.module.css";

interface TableRowProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
  brand: string;
  id: string;
  delivered_by: string;
  quantity: string;
  price: string;
}

const TableRow = ({
  icon: Icon,
  name,
  brand,
  id,
  delivered_by,
  quantity,
  price,
}: TableRowProps) => {
  return (
    <tr className={styles.container}>
      <td className={styles.productName}>
        <Icon />
        {name}
      </td>
      <td>{brand}</td>
      <td>{id}</td>
      <td>{delivered_by}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <button>Editar</button>
        <button>Excluir</button>
      </td>
    </tr>
  );
};

export default TableRow;
