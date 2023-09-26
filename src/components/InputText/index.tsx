import styles from "./styles.module.css";

interface InputTextProps {
  name: string;
  placeholder: string;
  label: string;
}

const InputText = ({ name, placeholder, label }: InputTextProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <br />
      <input type="text" id={name} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputText;
