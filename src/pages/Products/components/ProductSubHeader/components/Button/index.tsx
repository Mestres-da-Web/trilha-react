import { useContext } from "react";
import { GlobalContext } from "../../../../../../context/GlobalContext";

interface ButtonProps {
  onAddProduct(): void;
}

function Button({ onAddProduct }: ButtonProps) {
  const { value } = useContext(GlobalContext);
  return (
    <div>
      <button>Adicionar</button>
      <h1>Value: {value}</h1>
    </div>
  );
}

export default Button;
