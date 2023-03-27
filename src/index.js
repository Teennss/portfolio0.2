import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";

import Card from "./CardAnimation/Card";
import AnimatedRoutes from "./AnimatedRoutes";

const Page = () => {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
