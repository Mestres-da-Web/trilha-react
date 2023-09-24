import styles from "./styles.module.css";

interface ButtonRootProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "default" | "error";
}

const ButtonRoot = ({
  children,
  onClick,
  type = "default",
}: ButtonRootProps) => {
  return (
    <button
      className={`${styles.root} ${
        type === "default" ? styles.defaultColor : styles.errorColor
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonRoot;
