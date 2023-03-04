interface LargeButtonProps {
  title: string;
  type?: "submit" | "button";
  onClickComponent?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

function LargeButton({
  title,
  type = "button",
  onClickComponent,
}: LargeButtonProps) {
  return (
    <button type={type} onClick={onClickComponent}>
      {title}
    </button>
  );
}

export default LargeButton;
