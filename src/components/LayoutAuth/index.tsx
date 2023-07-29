import { Outlet } from "react-router-dom";
import Header from "../Header";
import styles from "./styles.module.css";

function LayoutAuth() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutAuth;
