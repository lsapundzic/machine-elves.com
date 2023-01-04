import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Disabled strict mode, it interferes with the console
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
