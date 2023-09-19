import React, { createContext, useState } from "react";
import { IProduct } from "../domain/models/product";

interface GlobalContextProps {
  state: {
    isAddingProduct: boolean;
    products: IProduct[];
  };
  methods: {
    startAddingProduct: () => void;
    finishAddingProduct: () => void;
    updateProducts: (data: IProduct[]) => void;
  };
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps,
);

export const GlobalContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const startAddingProduct = () => {
    setIsAddingProduct(true);
  };

  const finishAddingProduct = () => {
    setIsAddingProduct(false);
  };

  const updateProducts = (data: IProduct[]) => {
    setProducts(data);
  };

  const state = {
    isAddingProduct,
    products,
  };

  const methods = {
    startAddingProduct,
    finishAddingProduct,
    updateProducts,
  };

  return (
    <GlobalContext.Provider value={{ state, methods }}>
      {children}
    </GlobalContext.Provider>
  );
};
