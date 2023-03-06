interface LargeButtonProps {
  title: string;
  type?: "submit" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function LargeButton({ title, type = "button", onClick }: LargeButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {title}
    </button>
  );
}

export default LargeButton;
