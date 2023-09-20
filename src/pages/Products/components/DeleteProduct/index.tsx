import { useState } from "react";
import DeleteFeedback from "./components/DeleteFeedback";

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
        <div style={{ backgroundColor: "white" }}>
          <h1>Tem certeza que deseja excluir este produto?</h1>
          <p>Após excluir, você não poderá reverter a ação</p>
          <button onClick={handleDelete}>Excluir produto</button>
        </div>
      )}
    </>
  );
};

export default DeleteProduct;
