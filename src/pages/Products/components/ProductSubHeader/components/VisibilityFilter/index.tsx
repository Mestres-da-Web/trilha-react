interface VisibilityFilterProps {
  onVisibilityChange(): void;
}

function VisibilityFilter({ onVisibilityChange }: VisibilityFilterProps) {
  return (
    <div>
      <select onChange={onVisibilityChange}>
        <option>Todos os produtos</option>
        <option>Produtos excluídos</option>
      </select>
    </div>
  );
}

export default VisibilityFilter;
