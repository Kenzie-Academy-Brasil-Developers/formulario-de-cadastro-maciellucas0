import logo from "../../Assets/Logo.png";
import { Container, DivInput, Form } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsFillEyeSlashFill } from "react-icons/bs";
const FormLogin = () => {
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

        <Form>
          <h1>Login</h1>
          <DivInput>
            <label htmlFor="email">Email</label>
            <input placeholder="Email" type="text" name="email" id="email" />
          </DivInput>
          <DivInput>
            <label htmlFor="senha">Senha</label>
            <input placeholder="Senha" type={senha} name="senha" id="senha" />
            <button type="button" onClick={mostrarSenha}>
              <BsFillEyeSlashFill />
            </button>
          </DivInput>
          <button>Entrar</button>
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
