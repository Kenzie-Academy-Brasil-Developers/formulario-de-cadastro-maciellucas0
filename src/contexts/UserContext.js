import { createContext } from "react";
import { api } from "../Services/api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

function Provider({ children }) {
  const navigate = useNavigate();
  const logar = (data) => {
    api
      .post("/sessions", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success("Login efetuado com sucesso", {
          duration: 4000,
          position: "top-center",
          style: {
            fontFamily: "Inter",
          },
        });
      })
      .then(() => navigate("/home", { replace: true }))
      .catch(() =>
        toast.error("Usuário ou senha inválidos", {
          duration: 4000,
          position: "top-center",
          style: {
            fontFamily: "Inter",
          },
        })
      );
  };

  return (
    <>
      <UserContext.Provider value={{ logar }}>{children}</UserContext.Provider>
    </>
  );
}

export default Provider;
