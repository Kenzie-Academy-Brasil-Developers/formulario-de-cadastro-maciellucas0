import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { CadastroTechContext } from "../../contexts/CadastroTechContext";
import toast from "react-hot-toast";
import { api } from "../../Services/api";

const Modal = () => {
  const { modal, setModal, setReloadTechs, reloadTechs } =
    useContext(CadastroTechContext);

  const formSchema = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),

    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

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
};

export default Modal;
