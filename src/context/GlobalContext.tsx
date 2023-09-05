import React, { createContext, useState } from "react";

interface GlobalContextProps {
  state: {
    isAddingProduct: boolean;
  };
  methods: {
    startAddingProduct: () => void;
    finishAddingProduct: () => void;
  };
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps,
);

export const GlobalContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const startAddingProduct = () => {
    setIsAddingProduct(true);
  };

  const finishAddingProduct = () => {
    setIsAddingProduct(false);
  };

  const state = {
    isAddingProduct,
  };

  const methods = {
    startAddingProduct,
    finishAddingProduct,
  };

  return (
    <GlobalContext.Provider value={{ state, methods }}>
      {children}
    </GlobalContext.Provider>
  );
};
