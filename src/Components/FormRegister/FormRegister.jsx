import { DivInput, Form } from "./style";

const FormRegister = () => {
  return (
    <>
      <Form>
        <DivInput>
          <h1>Crie sua conta</h1>
          <span>Rápido e grátis, vamos nessa</span>
        </DivInput>
        <DivInput>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" />
        </DivInput>
        <DivInput>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </DivInput>
        <DivInput>
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" />
        </DivInput>
        <DivInput>
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input type="password" id="confirmarSenha" name="confirmarSenha" />
        </DivInput>
        <DivInput>
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" name="bio" />
        </DivInput>
        <DivInput>
          <label htmlFor="contato">Contato</label>
          <input type="text" id="contato" name="contato" />
        </DivInput>
        <DivInput>
          <label htmlFor="modulo">Módulo</label>
          <input type="text" id="modulo" name="modulo" />
        </DivInput>
        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
};

export default FormRegister;
