import { useEffect, useState } from "react";

interface IProduct {
  id: string;
  name: string;
  brand_id: string;
  specification_id: string;
}

function ProductTable() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/products", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setProducts(data.results));
  }, []);

  return (
    <div>
      <h1>ProductTable</h1>
      {products.map((product) => (
        <h1>{product.name}</h1>
      ))}
    </div>
  );
}

export default ProductTable;
