import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../Services/api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HeadersDefaults } from "axios";

interface Context {
  logar: any;
  onSubmit: any;
  usuario: any;
  loading: any;
}

export const UserContext = createContext({} as Context);

interface IChildren {
  children: ReactNode;
}

interface ILogin {
  email: string;
  password: string;
}

interface ICadastro {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
  onSubmit: any;
}

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

function UserProvider({ children }: IChildren) {
  const navigate = useNavigate();

  const [usuario, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@Context:token");

      if (token) {
        try {
          api.defaults.headers = {
            Authorization: `Bearer ${token}`,
          } as CommonHeaderProperties;
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

  const logar = async (data: ILogin) => {
    try {
      const response = await api.post("/sessions", data);
      const { user, token } = response.data;

      localStorage.setItem("@Context:token", token);
      toast.success("Login efetuado com sucesso", {
        duration: 4000,
        position: "top-center",
        style: {
          fontFamily: "Inter",
        },
      });
      setUser(user);
      navigate("/home", { replace: true });

      api.defaults.headers = {
        Authorization: `Bearer ${token}`,
      } as CommonHeaderProperties;
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

  const onSubmit = (data: ICadastro) => {
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

  return (
    <>
      <UserContext.Provider
        value={{
          logar,
          onSubmit,
          usuario,
          loading,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserProvider;
