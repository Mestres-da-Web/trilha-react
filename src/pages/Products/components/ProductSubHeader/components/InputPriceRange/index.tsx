interface InputPriceRangeProps {
  onPriceChange(): void;
}

function InputPriceRange({ onPriceChange }: InputPriceRangeProps) {
  return (
    <div>
      <input type="range" />
    </div>
  );
}

export default InputPriceRange;
