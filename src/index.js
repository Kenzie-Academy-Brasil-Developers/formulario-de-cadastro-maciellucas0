import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserProvider from "./contexts/UserContext";
<<<<<<< HEAD

import CadastroTechContext from "./contexts/CadastroTechContext";
=======
<<<<<<< HEAD
import CadastrarProvider from "./contexts/CadastroTechContext";
=======
import CadastrarProvider from "./contexts/CadastroContext";
>>>>>>> 86c279010144fc4804c4de034126cc39c2b06109
>>>>>>> 49e07a0d8eb7297f03824eebb4621ec4986a579c

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
<<<<<<< HEAD
        <CadastroTechContext>
          <App />
        </CadastroTechContext>
=======
        <CadastrarProvider>
          <App />
        </CadastrarProvider>
>>>>>>> 49e07a0d8eb7297f03824eebb4621ec4986a579c
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
