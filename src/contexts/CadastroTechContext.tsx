import { createContext, ReactNode, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../Services/api";
import { HeadersDefaults } from "axios";

interface ContextState {
  modal: boolean;
  setModal: any;
  reloadTechs: boolean;
  setReloadTechs: any;
  cadastrarTecnologia: any;
}

export const CadastroTechContext = createContext({} as ContextState);

interface CommonHeaderProperties extends HeadersDefaults {
  headers: any;
}

interface IChildren {
  children: ReactNode;
}

function CadastrarTechProvider({ children }: IChildren) {
  const [modal, setModal] = useState(false);
  const [reloadTechs, setReloadTechs] = useState(false);

  const cadastrarTecnologia = (data: { nome: string; status: string }) => {
    console.log(data);

    api
      .post(
        "/users/techs",
        {
          title: data.nome,
          status: data.status,
        },
        {
          headers: `Bearer ${localStorage.getItem("@Context:token")}`,
        } as CommonHeaderProperties
      )
      .then(() => {
        toast.success("Tecnologia criada com sucesso", {
          style: {
            fontFamily: "Inter",
          },
        });
        setModal(false);
        setReloadTechs(!reloadTechs);
      })
      .catch((error) => {
        toast.error(
          "Ops , Algo deu errado, tente trocar o nome da tecnologia ",
          {
            position: "top-right",
            style: {
              fontFamily: "Inter",
            },
          }
        );
      });
  };

  return (
    <CadastroTechContext.Provider
      value={{
        modal,
        setModal,
        reloadTechs,
        setReloadTechs,
        cadastrarTecnologia,
      }}
    >
      {children}
    </CadastroTechContext.Provider>
  );
}

export default CadastrarTechProvider;
