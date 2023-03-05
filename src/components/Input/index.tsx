import { useState } from "react";

interface InputProps {
  title: string;
  name: string;
  placeholder: string;
}

function Input({ title, name, placeholder }: InputProps) {
  const [value, setValue] = useState("");

  return (
    <label>
      {title} <br />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <br />
      <p>{value}</p>
    </label>
  );
}

export default Input;
