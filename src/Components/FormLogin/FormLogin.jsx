import { toast } from "react-hot-toast";
import logo from "../../Assets/Logo.png";
import { Container, DivInput, Form } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { api } from "../../Services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormLogin = () => {
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

  const navigate = useNavigate();

  const logar = (data) => {
    api
      .post("/sessions", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success("Login efetuado com sucesso", {
          duration: 4000,
          position: "top-center",
          style: {
            fontFamily: "Inter",
          },
        });
      })
      .then(() => navigate("/home", { replace: true }))
      .catch(() =>
        toast.error("Usuário ou senha inválidos", {
          duration: 4000,
          position: "top-center",
          style: {
            fontFamily: "Inter",
          },
        })
      );
  };

  const [senha, setSenha] = useState("password");
  function mostrarSenha(e) {
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
        {/* {verificado === false && <ToastContainer autoClose={1500} />} */}
      </Container>
    </>
  );
};

export default FormLogin;
