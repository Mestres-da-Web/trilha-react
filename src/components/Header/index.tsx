import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  const location = useLocation();
  console.log(location);
  return (
    <nav style={{ backgroundColor: "green" }}>
      <ul>
        <li>
          <NavLink
            to={""}
            className={({ isActive }) => {
              return isActive ? styles.activeLink : styles.inactiveLink;
            }}
          >
            Início
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"signup"}
            className={({ isActive }) => {
              return isActive ? styles.activeLink : styles.inactiveLink;
            }}
          >
            Cadastro
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"signin"}
            className={({ isActive }) => {
              return isActive ? styles.activeLink : styles.inactiveLink;
            }}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
