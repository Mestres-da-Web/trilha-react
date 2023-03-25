import { FormEvent, useRef } from "react";

function UseRefExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const nameInput = inputRef.current;

    if (nameInput) {
      nameInput.value = "Jancer";
      nameInput.className = "ref";
    }
  };

  // {} === {} // false
  // () => {} === () => {} // false

  return (
    <div>
      <h1>Exemplo useRef</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" ref={inputRef} />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default UseRefExample;
