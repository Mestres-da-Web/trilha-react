import { Outlet } from "react-router-dom";
import HeaderProduct from "./components/HeaderProduct";
import Sidebar from "./components/Sidebar";
import styles from "./styles.module.css";

function LayoutProduct() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.contentContainer}>
        <HeaderProduct />
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutProduct;
