import logo from "../../Assets/Logo.png";
import { DivInput, Form, Navigation } from "./style";

import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services/api";
import { useState } from "react";

const FormRegister = () => {
  const [liberadoCadastro, setLiberadoCadastro] = useState(false);

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatótio"),
    email: yup.string().email("Email inválido"),
    password: yup.string().min(8, "Minimo 8 caracteres"),
    confirmPassword: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),

    course_module: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);

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
        console.log(response);
        setLiberadoCadastro(true);
        navigate("/login", { replace: true });
      })
      .catch((errors) => console.log(errors));
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
          <span>Rápido e grátis, vamos nessa</span>
        </DivInput>

        <DivInput>
          <label htmlFor="nome">Nome</label>
          <input
            placeholder="Digite aqui seu nome"
            type="text"
            id="nome"
            {...register("name")}
          />
        </DivInput>

        <DivInput>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Digite aqui seu e-mail"
            type="text"
            id="email"
            {...register("email")}
          />
        </DivInput>

        <DivInput>
          <label htmlFor="senha">Senha</label>
          <input
            placeholder="Digite aqui sua senha"
            type="password"
            id="senha"
            {...register("password")}
          />
        </DivInput>

        <DivInput>
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            placeholder="Confirme sua senha"
            type="password"
            id="confirmarSenha"
            {...register("confirmPassword")}
          />
        </DivInput>

        <DivInput>
          <label htmlFor="bio">Bio</label>
          <input
            placeholder="Fale sobre você"
            type="text"
            id="bio"
            {...register("bio")}
          />
        </DivInput>

        <DivInput>
          <label htmlFor="contato">Contato</label>
          <input
            placeholder="Opção de contato"
            type="text"
            id="contato"
            {...register("contact")}
          />
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
        </DivInput>

        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
};

export default FormRegister;
