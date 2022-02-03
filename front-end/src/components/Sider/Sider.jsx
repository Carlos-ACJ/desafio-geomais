import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;

export default function MySider() {

  const [sideBarMenuKey, setSideBarMenuKey] = useState();
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{ background: "#fff" }}
      theme="light"
      width="130px"
      collapsedWidth="60px"
    >
      <div />
      <Menu theme="light" mode="inline" defaultSelectedKeys={[sideBarMenuKey]}>
        <Menu.Item
          key={"1"}
          icon={<HomeOutlined />}
          onClick={() => {
            setSideBarMenuKey(1);
          }}
        >
          <Link to="/">Inicio</Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<UserOutlined />}
          onClick={() => {
            setSideBarMenuKey(2);
          }}
        >
          <Link to="/Cadastro">Cadastro</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
