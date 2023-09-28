import styles from "./styles.module.css";

interface InputSelectProps {
  name: string;
  options: { name: string; value: string }[];
  label: string;
}

const InputSelect = ({ name, options, label }: InputSelectProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <br />
      <select id={name} name={name}>
        {options.map((brand) => {
          return <option value={brand.value}>{brand.name}</option>;
        })}
      </select>
    </div>
  );
};

export default InputSelect;
