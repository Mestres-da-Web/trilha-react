import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={""}>Início</NavLink>
        </li>
        <li>
          <NavLink to={"signup"}>Cadastro</NavLink>
        </li>
        <li>
          <NavLink to={"signin"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
