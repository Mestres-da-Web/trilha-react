import { FormEvent } from "react";
import Input from "../../components/Input";
import LargeButton from "../../components/LargeButton";
import Illustration from "../../assets/Images/Illustration.png";
import MWLogo from "../../assets/Images/MWLogo.png";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

function SignUp() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <img className={styles.logo} src={MWLogo} alt="Logo" />
        <img src={Illustration} alt="Ilustração" />
      </div>

      <div className={styles.rightColumn}>
        <h1 className={styles.title}>Seja bem vindo!</h1>
        <p className={styles.description}>Faça o cadastro para continuar</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input name="name" title="Nome" placeholder="Insira seu nome" />
          <Input
            name="phone"
            title="Telefone"
            placeholder="Insira seu telefone"
          />
          <Input name="email" title="E-mail" placeholder="Insira seu e-mail" />
          <Input
            name="password"
            title="Senha"
            placeholder="Insira sua senha"
            password={true}
          />
          <Input
            name="passwordConfirmation"
            title="Confirmar senha"
            placeholder="Insira sua senha novamente"
            password
          />

          <p>
            Já tem conta? <NavLink to={"/signin"}>Faça login</NavLink>
          </p>

          <div>
            <input name="termos" type={"checkbox"} />

            <p>
              Li e concordo com os{" "}
              <NavLink to={"/"}>Termos de Uso e Privacidade</NavLink> da
              plataforma.
            </p>
          </div>

          <LargeButton title="Fazer cadastro" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
