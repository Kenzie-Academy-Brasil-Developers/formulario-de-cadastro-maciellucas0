import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserProvider from "./contexts/UserContext";
<<<<<<< HEAD
import CadastrarProvider from "./contexts/CadastroTechContext";
=======
import CadastrarProvider from "./contexts/CadastroContext";
>>>>>>> 86c279010144fc4804c4de034126cc39c2b06109

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CadastrarProvider>
          <App />
        </CadastrarProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
