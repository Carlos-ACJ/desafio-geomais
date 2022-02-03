import React from "react";
import "antd/dist/antd.css";
import { Layout, Row, Col } from "antd";
import Logo from "../assets/logo.png";

const { Header } = Layout;

export default function MyHeader() {
  return (
    <Header style={{ padding: 0, background: "#fff" }}>
      <Row>
        <Col span={6}>
          <aside className="logo">
            <img
              src={Logo}
              alt="logo"
              style={{ width: "100px", margin: "0px 15px" }}
            />
          </aside>
        </Col>
        <Col span={18} align="right">
          <h1 style={{ margin: "10px 16px" }}>Sistema de cadastro</h1>
        </Col>
      </Row>
    </Header>
  );
}
