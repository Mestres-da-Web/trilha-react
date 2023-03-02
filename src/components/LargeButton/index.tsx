interface LargeButtonProps {
  onClickComponent: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

function LargeButton({ onClickComponent }: LargeButtonProps) {
  return <button onClick={onClickComponent}>Apagar</button>;
}

export default LargeButton;
