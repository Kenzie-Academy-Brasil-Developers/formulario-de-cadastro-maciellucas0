import { createContext, ReactNode, useState } from "react";

export const CadastroTechContext = createContext({});

interface IChildren {
  children: ReactNode;
}

function CadastrarTechProvider({ children }: IChildren) {
<<<<<<< HEAD
  const [modal, setModal] = useState<boolean>(false);
  const [reloadTechs, setReloadTechs] = useState<boolean>(false);
=======
  const [modal, setModal] = useState(false);
  const [reloadTechs, setReloadTechs] = useState(false);
>>>>>>> 49e07a0d8eb7297f03824eebb4621ec4986a579c

  return (
    <CadastroTechContext.Provider
      value={{ modal, setModal, reloadTechs, setReloadTechs }}
    >
      {children}
    </CadastroTechContext.Provider>
  );
}

export default CadastrarTechProvider;
