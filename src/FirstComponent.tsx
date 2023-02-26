interface FirstComponentProps {
  description?: string;
}

// {} === {description: string}
function FirstComponent({
  description = "Valor default",
}: FirstComponentProps) {
  console.log(description);

  return (
    <div>
      <h2>{description}</h2>
    </div>
  );
}

export default FirstComponent;
