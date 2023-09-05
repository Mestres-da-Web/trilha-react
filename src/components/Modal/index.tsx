import React, { useContext } from "react";
import styles from "./style.module.css";
import { GlobalContext } from "../../context/GlobalContext";

interface ModalProps extends React.PropsWithChildren {
  onClose?: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  const {
    methods: { finishAddingProduct },
  } = useContext(GlobalContext);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (onClose) onClose();
    finishAddingProduct();
  };

  const handleStopPropagation: React.MouseEventHandler<HTMLDivElement> = (
    e,
  ) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div onClick={handleStopPropagation}>{children}</div>
    </div>
  );
};

export default Modal;
