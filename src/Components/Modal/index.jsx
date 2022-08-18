import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
<<<<<<< HEAD
import { CadastroTechContext } from "../../contexts/CadastroTechContext";
import toast from "react-hot-toast";
import { api } from "../../Services/api";

const Modal = () => {
  const { modal, setModal, setReloadTechs, reloadTechs } =
    useContext(CadastroTechContext);
=======
import { CadastroContext } from "../../contexts/CadastroContext";

const Modal = () => {
  const { cadastrarTecnologia, modal, setModal } = useContext(CadastroContext);
>>>>>>> 86c279010144fc4804c4de034126cc39c2b06109

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

<<<<<<< HEAD
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

=======
>>>>>>> 86c279010144fc4804c4de034126cc39c2b06109
  return (
    <>
      <Container>
        <div>
          <h2>Cadastrar tecnologia</h2>
          <button onClick={() => setModal(!modal)}>
            <IoMdClose />
          </button>
        </div>
        <form onSubmit={handleSubmit(cadastrarTecnologia)}>
          <label htmlFor="tecnologia">Nome</label>
          <input
            type="text"
            placeholder="Tecnologia"
            id="tecnologia"
            {...register("nome")}
          />
          <span>{errors.nome?.message}</span>

          <label htmlFor="status">Status</label>
          <select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </Container>
    </>
  );
};

export default Modal;
