import React, { ChangeEvent, memo, useMemo, useState } from "react";

interface RenderListProps {
  items: number[];
}

// const RenderList = memo(() => {})

function RenderList({ items }: RenderListProps) {
  console.log("Componente RenderList renderizada");
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li>Item: {item}</li>
        ))}
      </ul>
    </div>
  );
}

const RenderListMemoized = memo(RenderList);

function UseMemoExample() {
  const [name, setName] = useState("");
  const [value, setValue] = useState(20);

  const numberListMemoized = useMemo(() => {
    return [value, 21, 22, 23, 24, 25];
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Exemplo useMemo</h1>
      <input placeholder="Nome" value={name} onChange={handleChange} />
      <button onClick={() => setValue(value + 1)}>Aumentar valor</button>
      <RenderListMemoized items={numberListMemoized} />
    </div>
  );
}

export default UseMemoExample;
