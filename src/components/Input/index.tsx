import { ChangeEvent } from "react";
import styles from "./styles.module.css";

interface InputProps {
  title: string;
  name: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ title, name, placeholder, onChange }: InputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{title} </label>
      <input
        className={styles.input}
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
