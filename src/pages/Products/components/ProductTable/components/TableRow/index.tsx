import styles from "./styles.module.css";
import { ReactComponent as DeleteIcon } from "../../../../../../assets/Icons/delete.svg";
import { ReactComponent as EditIcon } from "../../../../../../assets/Icons/edit.svg";

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
      <td className={styles.buttonsContainer}>
        <EditIcon className={styles.iconButton} />
        <DeleteIcon className={styles.iconButton} />
      </td>
    </tr>
  );
};

export default TableRow;
