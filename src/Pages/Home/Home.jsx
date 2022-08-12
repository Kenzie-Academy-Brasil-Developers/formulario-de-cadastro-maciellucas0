import { Link } from "react-router-dom";
import { Navigation, UlTechs } from "./style";
import logo from "../../Assets/Logo.png";
import { Div, Header } from "./style";
import { FaPlus } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Modal from "../../Components/Modal";
import { api } from "../../Services/api";
import ListaTechs from "../../Components/UlTechs";
import { CadastroContext } from "../../contexts/CadastroContext";

const Home = () => {
  const { usuario } = useContext(UserContext);
  const { modal, setModal } = useContext(CadastroContext);
  const [techs, setTech] = useState([]);

  useEffect(() => {
    api.get("/profile").then((response) => setTech(response.data.techs));
  }, [techs]);

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
        <ListaTechs techs={techs} setTech={setTech} />
      </UlTechs>
    </>
  );
};

export default Home;
