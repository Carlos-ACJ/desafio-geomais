import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import Home from "./home/Home";
import "antd/dist/antd.min.css";
// import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <Home />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
