import { useReducer } from "react";
import counterReducer from "./counterReducer";

function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    name: "Jancer",
  });

  return (
    <div>
      <h1>Hook useReducer</h1>

      <h2>Contador: {state.count}</h2>
      <h3>Nome do usuário: {state.name}</h3>

      <button onClick={() => dispatch({ type: "increment" })}>
        Aumentar valor
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Diminuir valor
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Resetar valor</button>
      <button onClick={() => dispatch({ type: "set", payload: 10 })}>
        Definir valor
      </button>
    </div>
  );
}

export default UseReducerComponent;
