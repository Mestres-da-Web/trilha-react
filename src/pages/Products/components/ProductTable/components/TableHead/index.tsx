import styles from "./styles.module.css";

interface TableHeadProps {
  headings: string[];
}

const TableHead = ({ headings }: TableHeadProps) => {
  return (
    <tr className={styles.container}>
      {headings.map((head) => {
        return <th>{head}</th>;
      })}
    </tr>
  );
};

export default TableHead;
