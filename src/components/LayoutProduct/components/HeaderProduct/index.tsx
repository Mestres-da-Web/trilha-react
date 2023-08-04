import styles from "./styles.module.css";

import ProfileImage from "../../../../assets/Images/woman.jpg";

function HeaderProduct() {
  return (
    <div className={styles.container}>
      <img className={styles.profileImage} src={ProfileImage} alt="Perfil" />
    </div>
  );
}

export default HeaderProduct;
