import logo from "../../Assets/Logo.png";
import { DivInput, Form, Navigation } from "./style";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services/api";

const FormRegister = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatótio")
      .max(20, "Máximo 20 caracteres"),

    email: yup.string().email("Email inválido").required("Campo obrigatório"),

    password: yup.string().min(6, "Minimo 6 caracteres"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais."),

    bio: yup.string().required("Campo obrigatório"),

    contact: yup.string().required("Campo obrigatório"),

    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    api
      .post("/users", {
        email: data.email,
        password: data.password,
        name: data.name,
        bio: data.bio,
        contact: data.contact,
        course_module: data.course_module,
      })
      .then((response) => {
        navigate("/login", { replace: true });
        toast.success("Conta criada com sucesso", {
          style: {
            fontFamily: "Inter",
          },
        });
      })
      .catch(() => {
        toast.error("Ops , Algo deu errado , tente trocar o e-mail", {
          position: "top-right",
          style: {
            fontFamily: "Inter",
          },
        });
      });
  };

  return (
    <>
      <Navigation>
        <img src={logo} alt="logo" />
        <Link to="/login">Voltar</Link>
      </Navigation>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <DivInput>
          <h1>Crie sua conta</h1>
          <span id="span">Rápido e grátis, vamos nessa</span>
        </DivInput>

        <DivInput>
          <label htmlFor="nome">Nome</label>
          <input
            placeholder="Digite aqui seu nome"
            type="text"
            id="nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </DivInput>

        <DivInput>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Digite aqui seu e-mail"
            type="text"
            id="email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </DivInput>

        <DivInput>
          <label htmlFor="senha">Senha</label>
          <input
            placeholder="Digite aqui sua senha"
            type="password"
            id="senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </DivInput>

        <DivInput>
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            placeholder="Confirme sua senha"
            type="password"
            id="confirmarSenha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>
        </DivInput>

        <DivInput>
          <label htmlFor="bio">Bio</label>
          <input
            placeholder="Fale sobre você"
            type="text"
            id="bio"
            {...register("bio")}
          />
          <span>{errors.bio?.message}</span>
        </DivInput>

        <DivInput>
          <label htmlFor="contato">Contato</label>
          <input
            placeholder="Opção de contato"
            type="text"
            id="contato"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>
        </DivInput>

        <DivInput>
          <label htmlFor="modulo">Módulo</label>
          <select id="modulo" {...register("course_module")}>
            <option value="Primeiro Modulo">Primeiro Modulo</option>
            <option value="Segundo Modulo">Segundo Modulo</option>
            <option value="Terceiro Modulo">Terceiro Modulo</option>
            <option value="Quarto Modulo">Quarto Modulo</option>
            <option value="Quinto Modulo">Quinto Modulo</option>
            <option value="Sexto Modulo">Sexto Modulo</option>
          </select>
          <span>{errors.course_module?.message}</span>
        </DivInput>

        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
};

export default FormRegister;
