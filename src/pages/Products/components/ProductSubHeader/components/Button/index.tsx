interface ButtonProps {
  onAddProduct(): void;
}

function Button({ onAddProduct }: ButtonProps) {
  return (
    <div>
      <button>Adicionar</button>
    </div>
  );
}

export default Button;
