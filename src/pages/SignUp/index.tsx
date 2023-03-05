import { FormEvent, useState } from "react";
import Input from "../../components/Input";
import LargeButton from "../../components/LargeButton";

function SignUp() {
  const [name, setName] = useState("123");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  console.log("Componente Signup renderizada");
  return (
    <div>
      <h1>State e lifecycle</h1>

      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Nome: <br />
          <input
            placeholder={"Insira seu nome"}
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
          <br />
        </label>
        {/* <Input name="name" title="Nome" placeholder="Insira seu nome" /> */}
        <Input
          name="phone"
          title="Telefone"
          placeholder="Insira seu telefone"
        />
        <Input name="email" title="E-mail" placeholder="Insira seu e-mail" />
        <Input name="password" title="Senha" placeholder="Insira sua senha" />
        <Input
          name="passwordConfirmation"
          title="Confirmar senha"
          placeholder="Insira sua senha novamente"
        />

        <LargeButton title="Fazer cadastro" type="submit" />
      </form>
    </div>
  );
}

export default SignUp;
