import { useState } from "react";
import { ChangeEvent } from "react";
import EyeInvisibleIcon from "../../assets/EyeInvisibleIcon";
import EyeVisibleIcon from "../../assets/EyeVisibleIcon";
import styles from "./styles.module.css";

interface InputProps {
  title: string;
  name: string;
  placeholder: string;
  password?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  title,
  name,
  placeholder,
  password = false,
  onChange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{title} </label>

      <input
        className={styles.input}
        type={password ? (showPassword ? "text" : "password") : "text"}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {password ? (
        showPassword ? (
          <EyeInvisibleIcon
            className={styles.icon}
            onClick={handleShowPassword}
          />
        ) : (
          <EyeVisibleIcon
            className={styles.icon}
            onClick={handleShowPassword}
          />
        )
      ) : null}
    </div>
  );
}

export default Input;
