import { createContext, useEffect, useState } from "react";
import { api } from "../Services/api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

function Provider({ children }) {
  const navigate = useNavigate();
  const [usuario, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@Context:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const logar = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      const { user: userResponse, token } = response.data;

      localStorage.setItem("@Context:token", token);
      toast.success("Login efetuado com sucesso", {
        duration: 4000,
        position: "top-center",
        style: {
          fontFamily: "Inter",
        },
      });
      setUser(userResponse);
      navigate("/home", { replace: true });

      api.defaults.headers.authorization = `Bearer ${token}`;
    } catch (error) {
      toast.error("Usuário ou senha inválidos", {
        duration: 4000,
        position: "top-center",
        style: {
          fontFamily: "Inter",
        },
      });
    }
  };

  const onSubmit = (data) => {
    api
      .post("/users", {
        email: data.email,
        password: data.password,
        name: data.name,
        bio: data.bio,
        contact: data.contact,
        course_module: data.course_module,
      })
      .then((response) => {
        navigate("/login", { replace: true });
        toast.success("Conta criada com sucesso", {
          style: {
            fontFamily: "Inter",
          },
        });
      })
      .catch(() => {
        toast.error("Ops , Algo deu errado , tente trocar o e-mail", {
          position: "top-right",
          style: {
            fontFamily: "Inter",
          },
        });
      });
  };

  const cadastrarTecnologia = async (e, data) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <UserContext.Provider
        value={{
          logar,
          onSubmit,
          usuario,
          loading,
          modal,
          setModal,
          cadastrarTecnologia,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}

export default Provider;
