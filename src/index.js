import React from "react";
import ReactDOM from "react-dom/client";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
//Icons Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";
//! Importante: los estilos propios deben ir debajo del de bootstrap, para que no los pise
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppRoutingFinal from "./AppRoutingFinal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRoutingFinal />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
