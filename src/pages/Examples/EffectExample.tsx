import { useEffect, useState } from "react";

interface Person {
  id: number;
  name: string;
  age: number;
  credits?: number;
}

const getPersonCredits = (personId: number) => {
  if (personId === 1) {
    return 123;
  }

  if (personId === 2) {
    return 500;
  }

  return undefined;
};

function EffectExample() {
  const [person, setPerson] = useState<Person | undefined>(undefined);
  const [personCredits, setPersonCredits] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    if (person) {
      const credits = getPersonCredits(person.id);
      setPersonCredits(credits);
    } else {
      console.log("Nenhum dado de pessoa foi encontrado");
    }

    return () => {
      console.log("Tchau effect");
    };
  }, [person]);

  const handleButton1 = () => {
    setPerson({ id: 1, name: "Jancer", age: 21 });
  };

  const handleButton2 = () => {
    setPerson({ id: 3, name: "Ana", age: 20 });
  };

  return (
    <div>
      <h3>Exemplo useEffect</h3>

      {person ? (
        <>
          <p>Nome : {person.name}</p>
          <p>Idade: {person.age}</p>
          <p>
            Créditos:{" "}
            {personCredits ? personCredits : "Nenhum crédito encontrado"}
          </p>
        </>
      ) : (
        <p>Nenhuma pessoa foi definida</p>
      )}

      <button onClick={handleButton1}>Definir pessoa 1</button>
      <button onClick={handleButton2}>Definir pessoa 2</button>
    </div>
  );
}

export default EffectExample;
