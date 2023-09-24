import { useState } from "react";
import DeleteFeedback from "./components/DeleteFeedback";
import styles from "./styles.module.css";
import { ReactComponent as DeleteConfirmationIcon } from "../../../../assets/Icons/delete-confirmation.svg";
import { Button } from "../../../../components/Button";

interface DeleteProductProps {
  onConfirm: () => void;
  onFinish: () => void;
}

const DeleteProduct = ({ onConfirm, onFinish }: DeleteProductProps) => {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleDelete = () => {
    onConfirm();
    setShowFeedback(true);
  };

  return (
    <>
      {showFeedback ? (
        <DeleteFeedback onFinish={onFinish} />
      ) : (
        <div className={styles.container}>
          <DeleteConfirmationIcon />
          <h1>Tem certeza que deseja excluir este produto?</h1>
          <p className={styles.textDescription}>
            Após excluir, você não poderá <br /> reverter a ação
          </p>

          <Button.Root onClick={handleDelete} type="error">
            <Button.Text text="Excluir produto" />
          </Button.Root>
        </div>
      )}
    </>
  );
};

export default DeleteProduct;
