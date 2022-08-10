import { Link } from "react-router-dom";
import { Navigation } from "./style";
import logo from "../../Assets/Logo.png";
import { Div, Header } from "./style";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Modal from "../../Components/Modal";

const Home = () => {
  const { usuario, modal, setModal } = useContext(UserContext);
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
