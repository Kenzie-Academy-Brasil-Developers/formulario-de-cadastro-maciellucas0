import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../Services/api";

export const CadastroContext = createContext({});

function CadastrarProvider({ children }) {
  const [modal, setModal] = useState(false);

  const cadastrarTecnologia = (data) => {
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
        }
      )
      .then(() => {
        toast.success("Tecnologia criada com sucesso", {
          style: {
            fontFamily: "Inter",
          },
        });
        setModal(false);
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
