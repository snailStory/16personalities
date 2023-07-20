import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routing from "./router/Routing.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
