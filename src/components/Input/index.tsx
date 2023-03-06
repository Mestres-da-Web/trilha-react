import { ChangeEvent } from "react";

interface InputProps {
  title: string;
  name: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ title, name, placeholder, onChange }: InputProps) {
  return (
    <label>
      {title} <br />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <br />
    </label>
  );
}

export default Input;
