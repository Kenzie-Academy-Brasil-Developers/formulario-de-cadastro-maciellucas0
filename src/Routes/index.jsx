import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Register />} />
      </Routes>
    </>
  );
};

export default RoutesMain;
