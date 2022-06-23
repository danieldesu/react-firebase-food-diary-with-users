//react
import React from "react";
import ReactDOM from "react-dom/client";
//style
import "./index.css";
//component/app
import App from "./App";
//firebase
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
