import styles from "./styles.module.css";

interface ButtonTextProps {
  text: string;
}

const ButtonText = ({ text }: ButtonTextProps) => {
  return <p className={styles.text}>{text}</p>;
};

export default ButtonText;
