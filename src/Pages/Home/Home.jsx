import { Link } from "react-router-dom";
import { Navigation, UlTechs } from "./style";
import logo from "../../Assets/Logo.png";
import { Div, Header } from "./style";
import { FaPlus } from "react-icons/fa";
<<<<<<< HEAD
import { useContext, useEffect } from "react";
=======
import { useContext, useEffect, useState } from "react";
>>>>>>> 49e07a0d8eb7297f03824eebb4621ec4986a579c
import { UserContext } from "../../contexts/UserContext";
import Modal from "../../Components/Modal";
import { api } from "../../Services/api";
import ListaTechs from "../../Components/UlTechs";
<<<<<<< HEAD

import { CadastroTechContext } from "../../contexts/CadastroTechContext";

const Home = () => {
  const { reloadTechs, setReloadTechs } = useContext(CadastroTechContext);
  const { usuario } = useContext(UserContext);
  const { modal, setModal } = useContext(CadastroTechContext);

  useEffect(() => {
    api.get("/profile").then((response) => setReloadTechs(response.data.techs));
  }, [reloadTechs, setReloadTechs]);
=======
<<<<<<< HEAD
import { CadastroTechContext } from "../../contexts/CadastroTechContext";

const Home = () => {
  const { reloadTechs } = useContext(CadastroTechContext);
  const { usuario } = useContext(UserContext);
  const { modal, setModal } = useContext(CadastroTechContext);
=======
import { CadastroContext } from "../../contexts/CadastroContext";

const Home = () => {
  const { usuario } = useContext(UserContext);
  const { modal, setModal } = useContext(CadastroContext);
>>>>>>> 86c279010144fc4804c4de034126cc39c2b06109
  const [techs, setTech] = useState([]);

  useEffect(() => {
    api.get("/profile").then((response) => setTech(response.data.techs));
<<<<<<< HEAD
  }, [reloadTechs]);
=======
  }, [techs]);
>>>>>>> 86c279010144fc4804c4de034126cc39c2b06109
>>>>>>> 49e07a0d8eb7297f03824eebb4621ec4986a579c

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
<<<<<<< HEAD
        <ListaTechs techs={reloadTechs} setTech={reloadTechs} />
=======
        <ListaTechs techs={techs} setTech={setTech} />
>>>>>>> 49e07a0d8eb7297f03824eebb4621ec4986a579c
      </UlTechs>
    </>
  );
};

export default Home;
