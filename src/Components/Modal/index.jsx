import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CadastroContext } from "../../contexts/CadastroContext";

const Modal = () => {
  const { cadastrarTecnologia, modal, setModal } = useContext(CadastroContext);

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
