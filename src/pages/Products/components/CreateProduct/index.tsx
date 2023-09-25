import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import { api } from "../../../../services/api";
import styles from "./style.module.css";
import { IBrand } from "../../../../domain/models/brand";

interface CreateProductProps {
  onCreate?: () => void;
}

function CreateProduct({ onCreate }: CreateProductProps) {
  const {
    methods: { finishAddingProduct },
  } = useContext(GlobalContext);

  const [brands, setBrands] = useState<IBrand[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.getBrands();

      setBrands(response);
    })();
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(formData) as any;

    try {
      const response = await api.createProduct({
        name: data.name,
        brand_id: data.brand_id,
      });

      if (onCreate) onCreate();

      console.log(response);
    } catch (error) {
      console.log(error);
    }

    finishAddingProduct();
  };

  return (
    <div className={styles.container}>
      <h1>Adicionar novo produto</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nome do produto"
        />
        <br />
        <br />

        <label htmlFor="brand">Marca</label>
        <br />
        <select id="brand" name="brand_id">
          {brands.map((brand) => {
            return <option value={brand.id}>{brand.name}</option>;
          })}
        </select>

        <br />
        <br />
        <button type="submit">Adicionar produto</button>
      </form>
    </div>
  );
}

export default CreateProduct;
