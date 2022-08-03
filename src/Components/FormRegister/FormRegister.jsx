import { DivInput, Form, Navigation } from "./style";
import logo from "../../Assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";

const FormRegister = () => {
  function CadastrandoNaApi() {}

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    navigate("/login", { replace: true });
  }

  return (
    <>
      <Navigation>
        <img src={logo} alt="logo" />
        <Link to="/login">Voltar</Link>
      </Navigation>

      <Form onSubmit={handleSubmit}>
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
            name="nome"
          />
        </DivInput>

        <DivInput>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Digite aqui seu e-mail"
            type="text"
            id="email"
            name="email"
          />
        </DivInput>

        <DivInput>
          <label htmlFor="senha">Senha</label>
          <input
            placeholder="Digite aqui ssua senha"
            type="password"
            id="senha"
            name="senha"
          />
        </DivInput>

        <DivInput>
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            placeholder="Confirme sua senha"
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
          />
        </DivInput>

        <DivInput>
          <label htmlFor="bio">Bio</label>
          <input
            placeholder="Fale sobre você"
            type="text"
            id="bio"
            name="bio"
          />
        </DivInput>

        <DivInput>
          <label htmlFor="contato">Contato</label>
          <input
            placeholder="Opção de contato"
            type="text"
            id="contato"
            name="contato"
          />
        </DivInput>

        <DivInput>
          <label htmlFor="modulo">Módulo</label>
          <select name="modulo" id="modulo">
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
