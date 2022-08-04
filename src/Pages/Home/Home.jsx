import { Link } from "react-router-dom";
import { Navigation } from "./style";
import logo from "../../Assets/Logo.png";
import { Div, Header } from "./style";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navigation>
        <img src={logo} alt="logo" />
        <Link onClick={() => localStorage.clear()} to="/login">
          Sair
        </Link>
      </Navigation>
      <Header>
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </Header>
      <Div>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </Div>
    </>
  );
};

export default Home;
