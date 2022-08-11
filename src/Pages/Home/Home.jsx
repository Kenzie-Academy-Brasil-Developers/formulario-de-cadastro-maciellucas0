import { Link } from "react-router-dom";
import { Navigation } from "./style";
import logo from "../../Assets/Logo.png";
import { Div, Header } from "./style";
import { FaPlus } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Modal from "../../Components/Modal";
import { api } from "../../Services/api";

const Home = () => {
  const { usuario, modal, setModal } = useContext(UserContext);
  const [techs, setTech] = useState([]);

  useEffect(() => {
    api
      .get("/profile", localStorage.getItem("@Context:token"))
      .then((response) => setTech(response.data.techs));
  }, [setTech]);

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
      <ul></ul>
    </>
  );
};

export default Home;
