interface DeleteFeedbackProps {
  onFinish: () => void;
}

const DeleteFeedback = ({ onFinish }: DeleteFeedbackProps) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <h1>Produto excluído com sucesso</h1>
      <button onClick={onFinish}>Continuar</button>
    </div>
  );
};

export default DeleteFeedback;
