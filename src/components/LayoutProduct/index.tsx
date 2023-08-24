import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderProduct from "./components/HeaderProduct";
import Sidebar from "./components/Sidebar";
import styles from "./styles.module.css";

function LayoutProduct() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/product");
  }, []);

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
