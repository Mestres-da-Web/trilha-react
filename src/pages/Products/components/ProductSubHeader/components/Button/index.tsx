import { useContext } from "react";
import { GlobalContext } from "../../../../../../context/GlobalContext";

interface ButtonProps {
  onAddProduct(): void;
}

function Button({ onAddProduct }: ButtonProps) {
  const {
    methods: { startAddingProduct },
  } = useContext(GlobalContext);

  const handleClick = () => {
    startAddingProduct();
  };

  return (
    <div>
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
}

export default Button;
