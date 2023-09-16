import { useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../../../context/GlobalContext";
import styles from "./style.module.css";
import { api } from "../../../../services/api";

function CreateProduct() {
  const {
    methods: { finishAddingProduct },
  } = useContext(GlobalContext);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(formData) as any;

    try {
      const response = await api.createProduct({
        name: data.name,
        brand_id: data.brand_id,
      });

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
          <option value="33796dcd-dd1f-4451-bc57-fd9e5d3715a6">Samsung</option>
          <option value="ec04eaa3-5f18-48db-bb56-817a94df78fa">Apple</option>
        </select>

        <br />
        <br />
        <button type="submit">Adicionar produto</button>
      </form>
    </div>
  );
}

export default CreateProduct;
