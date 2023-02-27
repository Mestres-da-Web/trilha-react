import PasswordVisibilityButton from "./components/PosswordVisibilityButton";

function SignUp() {
  return (
    <div>
      <h1>Hello from SignUp</h1>
      <PasswordVisibilityButton visible={false} />
    </div>
  );
}

export default SignUp;
