import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../Services/api";

export const CadastroContext = createContext({});

function CadastrarProvider({ children }) {
  const [modal, setModal] = useState(false);

  const cadastrarTecnologia = (data) => {
    console.log(data);
    try {
      api
        .post(
          "/users/techs",
          {
            title: data.nome,
            status: data.status,
          },
          {
            headers: `Bearer ${localStorage.getItem("@Context:token")}`,
          }
        )
        .then(() => {
          toast.success("Tecnologia criada com sucesso", {
            style: {
              fontFamily: "Inter",
            },
          });
        });
    } catch (error) {
      toast.error("Ops , Algo deu errado ", {
        position: "top-right",
        style: {
          fontFamily: "Inter",
        },
      });
    }

    setModal(false);
  };

  return (
    <>
      <CadastroContext.Provider
        value={{ modal, setModal, cadastrarTecnologia }}
      >
        {children}
      </CadastroContext.Provider>
    </>
  );
}

export default CadastrarProvider;
