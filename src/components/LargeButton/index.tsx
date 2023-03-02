interface LargeButtonProps {
  onClickComponent: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

function LargeButton({ onClickComponent }: LargeButtonProps) {
  return (
    <div
      style={{ backgroundColor: "green", padding: 20 }}
      onClick={() => {
        alert("Evento de clique na div");
      }}
    >
      <button onClick={onClickComponent}>Apagar</button>;
    </div>
  );
}

export default LargeButton;
