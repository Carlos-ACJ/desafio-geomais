import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import MySider from "../components/Sider/Sider";
import MyHeader from "../components/Header/Header";
//import MyFooter from "../components/Footer/Footer";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cadastro from "../pages/Cadastro/User";

export default function Home() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <MyHeader />

        <Layout className="site-layout">
          <MySider />
          <Route path="/" exact component={Dashboard} />
          <Route path="/cadastro" exact component={Cadastro} />
        </Layout>
        {/* <MyFooter /> */}
      </Layout>
    </Router>
  );
}
