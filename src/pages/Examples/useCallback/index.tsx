import React, { ChangeEvent, memo, useCallback, useState } from "react";

interface CounterProps {
  value: number;
  onSave: (value: number) => void;
}

// const Counter = memo(() => {})

function Counter({ value, onSave }: CounterProps) {
  console.log("Contador renderizado");
  return (
    <div>
      <h2>Contador: {value} </h2>
      <button onClick={() => onSave(value)}>Salvar</button>
    </div>
  );
}

const CounterMemoized = memo(Counter);

function UseCallbackExample() {
  const [inputValue, setInputValue] = useState("");
  const [counterValue, setCounterValue] = useState(0);

  const saveCounterValue = useCallback((value: number) => {
    console.log(`O valor do contador é ${value}`);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleIncrease = () => {
    setCounterValue(counterValue + 1);
  };

  return (
    <div>
      <h1>Exemplo useCallback</h1>
      <input
        placeholder="Nome"
        value={inputValue}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleIncrease}>Aumentar contador</button> <br /> <br />
      <CounterMemoized value={counterValue} onSave={saveCounterValue} />
    </div>
  );
}

export default UseCallbackExample;
