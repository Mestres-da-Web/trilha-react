import LargeButton from "../../components/LargeButton";

function SignUp() {
  const handleLargeButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    e.preventDefault();
    alert("Evento de clique no botão");
  };

  return (
    <div>
      <h1>Eventos</h1>
      <LargeButton onClickComponent={handleLargeButtonClick} />
    </div>
  );
}

export default SignUp;
