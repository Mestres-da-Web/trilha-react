import React, { createContext } from "react";

interface GlobalContextProps {
  value: string;
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps,
);

export const GlobalContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <GlobalContext.Provider value={{ value: "Mouse" }}>
      {children}
    </GlobalContext.Provider>
  );
};
