import logo from "../../Assets/Logo.png";
import { Container, DivInput, Form } from "./style";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext";

const FormLogin = () => {
  const { logar } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [senha, setSenha] = useState("password");
  function mostrarSenha(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (senha === "password") {
      setSenha("text");
    } else {
      setSenha("password");
    }
  }

  return (
    <>
      <Container>
        <img src={logo} alt="logoKenzie" />
        <Form onSubmit={handleSubmit(logar)}>
          <h1>Login</h1>
          <DivInput>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              type="text"
              id="email"
              {...register("email")}
            />
            <span>{errors.email?.message}</span>
          </DivInput>
          <DivInput>
            <label htmlFor="senha">Senha</label>
            <input
              placeholder="Senha"
              type={senha}
              id="senha"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>
            <button type="button" onClick={mostrarSenha}>
              <BsFillEyeSlashFill />
            </button>
          </DivInput>
          <button type="submit">Entrar</button>
          <div>
            <p>Ainda não possui uma conta?</p>
            <Link to="/registro">Cadastre-se</Link>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormLogin;
