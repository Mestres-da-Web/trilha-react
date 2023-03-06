import { FormEvent, useState } from "react";
import Input from "../../components/Input";
import LargeButton from "../../components/LargeButton";
import EffectExample from "../Examples/EffectExample";

function SignUp() {
  const [showComponent, setShowComponent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  return (
    <div>
      <h1>State e lifecycle</h1>

      {/* <form onSubmit={handleSubmit}>
        <Input name="name" title="Nome" placeholder="Insira seu nome" />
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
        <LargeButton title="Fazer cadastro" type="submit" /> <br />
      </form> */}

      {showComponent ? <EffectExample /> : null}
      <button
        type="button"
        onClick={() => {
          setShowComponent(!showComponent);
        }}
      >
        {showComponent ? "Remover componente" : "Adicionar componente"}
      </button>
    </div>
  );
}

export default SignUp;
