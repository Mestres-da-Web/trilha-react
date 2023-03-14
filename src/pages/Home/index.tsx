import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const navigation = useNavigate();

  return (
    <div>
      <h1>Hello from Home</h1>

      {!isAuthenticated ? <Navigate to={"/signup"} /> : null}

      <button
        onClick={() => {
          setIsAuthenticated(false);
        }}
      >
        Navegar para cadastro
      </button>
    </div>
  );
}

export default Home;
