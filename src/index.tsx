import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserProvider from "./contexts/UserContext";
import CadastrarProvider from "./contexts/CadastroTechContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
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
