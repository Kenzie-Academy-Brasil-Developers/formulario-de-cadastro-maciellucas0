import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const ProtectedRoutes = () => {
  const { usuario, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div>
        <h2>Carregando..</h2>
      </div>
    );
  }

  return usuario ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoutes;
