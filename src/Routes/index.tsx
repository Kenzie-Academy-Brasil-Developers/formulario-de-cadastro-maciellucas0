import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProtectedRoutes from "../ProtectedRoutes";

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesMain;
