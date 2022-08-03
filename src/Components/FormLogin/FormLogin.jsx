import logo from "../../Assets/Logo.png";
import { Container, DivInput, Form } from "./style";
const FormLogin = () => {
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
            <input
              placeholder="Senha"
              type="password"
              name="senha"
              id="senha"
            />
          </DivInput>
          <button>Entrar</button>
          <div>
            <p>Ainda não possui uma conta?</p>
            <button>Cadastre-se</button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormLogin;
