import styles from "./styles.module.css";

import MWLogo from "../../../../assets/Icons/mw-icon.svg";
import DetailsLogo from "../../../../assets/Icons/list-icon.svg";

function Sidebar() {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.navUl}>
          <li>
            <img src={MWLogo} alt="Logo mestres" />
          </li>
          <li className={styles.secondIcon}>
            <img src={DetailsLogo} alt="Icone de detalhes" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
