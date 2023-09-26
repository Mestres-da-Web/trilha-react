import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import { api } from "../../../../services/api";
import styles from "./style.module.css";
import { IBrand } from "../../../../domain/models/brand";
import InputText from "../../../../components/InputText";
import InputSelect from "../../../../components/InputSelect";
import ButtonRoot from "../../../../components/Button/ButtonRoot";
import { Button } from "../../../../components/Button";

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
      <h1 className={styles.title}>Adicionar novo produto</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.row}>
            <InputText
              name="name"
              placeholder="Nome do produto"
              label="Nome do produto"
            />

            <InputText
              name="loja_de_venda"
              placeholder="Loja de venda"
              label="Loja de venda"
            />

            <InputSelect
              name="brand_id"
              label="Marca"
              options={brands.map((brand) => {
                return { name: brand.name, value: brand.id };
              })}
            />
          </div>

          <div style={{ flex: 0.9 }}></div>

          <Button.Root>
            <Button.Text text="Adicionar produto" />
          </Button.Root>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
