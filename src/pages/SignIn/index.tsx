import { FormEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import styles from "./styles.module.css";
import Input from "../../components/Input";
import LargeButton from "../../components/LargeButton";
import Illustration from "../../assets/Images/Illustration.png";
import MWLogo from "../../assets/Images/MWLogo.png";

function SignIn() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData) as Record<string, string>;

    // Validação dos dados

    const response = await api.login({
      email: data.email,
      password: data.password,
    });

    console.log(response);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <img className={styles.logo} src={MWLogo} alt="Logo" />
        <img src={Illustration} alt="Ilustração" />
      </div>

      <div className={styles.rightColumn}>
        <h1 className={styles.title}>Olá!</h1>
        <p className={styles.description}>Faça o login para continuar</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input name="email" title="E-mail" placeholder="Insira seu e-mail" />
          <Input
            name="password"
            title="Senha"
            placeholder="Insira sua senha"
            password={true}
          />

          <NavLink className={styles.forgotPassword} to={"/forgot"}>
            Esqueci minha senha
          </NavLink>

          <LargeButton title="Fazer login" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
