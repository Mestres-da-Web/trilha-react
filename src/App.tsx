import React from "react";
import FirstComponent from "./FirstComponent";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <FirstComponent description={"Esse é o tipo correto"} />
      <FirstComponent />
    </div>
  );
}

export default App;
