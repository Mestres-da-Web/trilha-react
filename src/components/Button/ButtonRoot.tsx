import styles from "./styles.module.css";

interface ButtonRootProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonRoot = ({ children, onClick }: ButtonRootProps) => {
  return (
    <button className={styles.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonRoot;
