const data = [
  {
    id: 1,
    title: "Nome",
  },
  {
    id: 2,
    title: "E-mail",
  },
  {
    id: 3,
    title: "Telefone",
  },
  {
    id: 4,
    title: "Senha",
  },
];

function SignUp() {
  return (
    <div>
      <h1>Virtual DOM e trabalhando com listas</h1>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SignUp;
