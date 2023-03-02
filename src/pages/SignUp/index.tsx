import LargeButton from "../../components/LargeButton";

function SignUp() {
  const handleLargeButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log(e);
    alert("Olá props");
  };

  return (
    <div>
      <h1>Eventos</h1>
      <LargeButton onClickComponent={handleLargeButtonClick} />
    </div>
  );
}

export default SignUp;
