import logo from "../../Assets/Logo.png";
import { DivInput, Form, Navigation } from "./style";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const FormRegister = () => {
  const { onSubmit } = useContext(UserContext);

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
          <span>{errors.name?.message as unknown as string}</span>
        </DivInput>

        <DivInput>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Digite aqui seu e-mail"
            type="text"
            id="email"
            {...register("email")}
          />
          <span>{errors.email?.message as unknown as string}</span>
        </DivInput>

        <DivInput>
          <label htmlFor="senha">Senha</label>
          <input
            placeholder="Digite aqui sua senha"
            type="password"
            id="senha"
            {...register("password")}
          />
          <span>{errors.password?.message as unknown as string}</span>
        </DivInput>

        <DivInput>
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            placeholder="Confirme sua senha"
            type="password"
            id="confirmarSenha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message as unknown as string}</span>
        </DivInput>

        <DivInput>
          <label htmlFor="bio">Bio</label>
          <input
            placeholder="Fale sobre você"
            type="text"
            id="bio"
            {...register("bio")}
          />
          <span>{errors.bio?.message as unknown as string}</span>
        </DivInput>

        <DivInput>
          <label htmlFor="contato">Contato</label>
          <input
            placeholder="Opção de contato"
            type="text"
            id="contato"
            {...register("contact")}
          />
          <span>{errors.contact?.message as unknown as string}</span>
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
          <span>{errors.course_module?.message as unknown as string}</span>
        </DivInput>

        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
};

export default FormRegister;
