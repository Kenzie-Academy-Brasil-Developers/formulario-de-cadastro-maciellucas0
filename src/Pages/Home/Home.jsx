import { Link } from "react-router-dom";
import { Navigation, UlTechs } from "./style";
import logo from "../../Assets/Logo.png";
import { Div, Header } from "./style";
import { FaPlus } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import Modal from "../../Components/Modal";
import { api } from "../../Services/api";
import ListaTechs from "../../Components/UlTechs";

import { CadastroTechContext } from "../../contexts/CadastroTechContext";

const Home = () => {
  const { reloadTechs, setReloadTechs } = useContext(CadastroTechContext);
  const { usuario } = useContext(UserContext);
  const { modal, setModal } = useContext(CadastroTechContext);

  useEffect(() => {
    api.get("/profile").then((response) => setReloadTechs(response.data.techs));
  }, [reloadTechs, setReloadTechs]);

  return (
    <>
      {modal && <Modal />}
      <Navigation>
        <img src={logo} alt="logo" />
        <Link onClick={() => localStorage.clear()} to="/login">
          Sair
        </Link>
      </Navigation>
      <Header>
        <h2>Olá, {usuario.name}</h2>
        <p>{usuario.course_module}</p>
      </Header>
      <Div>
        <h2>Tecnologias</h2>
        <button onClick={() => setModal(!modal)}>
          <FaPlus />
        </button>
      </Div>
      <UlTechs>
        <ListaTechs techs={reloadTechs} setTech={reloadTechs} />
      </UlTechs>
    </>
  );
};

export default Home;
