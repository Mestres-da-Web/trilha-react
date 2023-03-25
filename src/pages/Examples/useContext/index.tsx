import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ContextProps {
  name: string;
  email: string;
  updateUserInfo: (username: string, email: string) => void;
}

const context = createContext<ContextProps>({
  name: "",
  email: "",
  updateUserInfo(username: string, email: string) {},
});

function ContextProvider({ children }: PropsWithChildren) {
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  const updateUserInfo = (username: string, email: string) => {
    console.log("Olá update");
    if (username === "") {
      console.log("Nome inválido");
      return;
    }

    setUserInfo({ name: username, email: email });
  };

  return (
    <context.Provider
      value={{ name: userInfo.name, email: userInfo.email, updateUserInfo }}
    >
      {children}
    </context.Provider>
  );
}

export { ContextProvider, context };

function User() {
  const { email, name, updateUserInfo } = useContext(context);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Componente usuário</h1>
      <h3>Nome do usuário: {name}</h3>
      <h3>Email do usuário: {email}</h3>

      <button
        onClick={() => {
          updateUserInfo("Jancer", "teste@teste.com");
          navigate("/signup");
        }}
      >
        Alterar informações usuário
      </button>
    </div>
  );
}

function ContextExample() {
  return (
    <div>
      <h1>Exemplo Context</h1>
      <User />
    </div>
  );
}

export default ContextExample;
