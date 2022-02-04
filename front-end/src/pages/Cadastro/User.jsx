import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import UserTable from "./UserTable";
const { Content } = Layout;

export default function Cadastro() {
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: "#fff",
      }}
    >
      <h1>Cadastro</h1>
      <UserTable />
    </Content>
  );
}
