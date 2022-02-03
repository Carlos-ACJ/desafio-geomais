import React, { useEffect, useState } from "react";
import UserService from "../../components/Api/Usuarios";
import "antd/dist/antd.css";
import { Layout, Statistic } from "antd";
const { Content } = Layout;

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    UserService.getUsers().then((users) => setUsers(users));
  }

  const isFiltro1 = (users) => users.sexo === "Feminino";
  const filtro1 = users.filter(isFiltro1);

  const isFiltro2 = (users) => users.sexo === "Masculino";
  const filtro2 = users.filter(isFiltro2);

  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: "#fff",
      }}
    >
      <div>
      <Statistic
          title="Total de Usuários"
          value={users.length}
          align="center"
        />
        <br/>
        <br/>
        <Statistic
          title="Total de Homens"
          value={filtro2.length}
          align="center"
        />
        <Statistic
          title="Total de Mulheres"
          value={filtro1.length}
          align="center"
        />
      </div>
    </Content>
  );
}
