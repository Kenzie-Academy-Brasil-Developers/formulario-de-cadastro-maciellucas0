import { createContext, ReactNode, useState } from "react";

export const CadastroTechContext = createContext({});

interface IChildren {
  children: ReactNode;
}

function CadastrarTechProvider({ children }: IChildren) {
  const [modal, setModal] = useState<boolean>(false);
  const [reloadTechs, setReloadTechs] = useState<boolean>(false);

  return (
    <CadastroTechContext.Provider
      value={{ modal, setModal, reloadTechs, setReloadTechs }}
    >
      {children}
    </CadastroTechContext.Provider>
  );
}

export default CadastrarTechProvider;
