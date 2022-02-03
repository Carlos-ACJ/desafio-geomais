import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import UserTable from "./UserTable";
const { Content } = Layout;

class Cadastro extends React.Component {
  render() {
    return (
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <h1>Cadastro</h1>
        <UserTable />
      </Content>
    );
  }
}

export default Cadastro;
