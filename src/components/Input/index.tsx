interface InputProps {
  title: string;
  name: string;
  placeholder: string;
}

function Input({ title, name, placeholder }: InputProps) {
  return (
    <label>
      {title} <br />
      <input type="text" name={name} placeholder={placeholder} />
      <br />
    </label>
  );
}

export default Input;
