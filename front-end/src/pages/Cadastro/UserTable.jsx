import DetailUser from "../../components/Modal/DetailUser";
import EditUser from "../../components/Modal/EditUser";
import Delet from "../../components/Modal/Delet";
import Add from "../../components/Modal/AddUser";
import { Table, Space, Input, Col, Statistic, Row } from "antd";
import React, { useEffect, useState } from "react";
import UserService from "../../components/Api/Usuarios";
import { SearchOutlined } from "@ant-design/icons";

const { Column, ColumnGroup } = Table;

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    UserService.getUsers().then((users) => setUsers(users));
  }

  function handleSaveUser(user) {
    UserService.saveUser(user).then(() => loadUsers());
  }

  function handleRemoveUser(user) {
    UserService.removeUser(user).then(() => loadUsers());
  }

  const filtro = users.filter((users) => {
    return Object.values(users)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
  //console.log(filtro);

  return (
    <div>
      <Input
        placeholder="Buscar"
        prefix={<SearchOutlined />}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Row justify="space-between" align="middle">
        <Col justify="start">
          <Add handleSaveUser={handleSaveUser} />
        </Col>
        <Col justify="end">
          <Statistic
            title="Total Cadastrados"
            value={users.length}
            align="center"
          />
        </Col>
      </Row>
      <Table
        dataSource={filtro}
        rowKey="nome"
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"],
        }}
      >
        <ColumnGroup>
          <Column align="left" title="Nome" dataIndex="nome" />
          <Column align="center" title="CPF" dataIndex="cpf" />
          <Column
            align="right"
            render={(_, values) => (
              <Space size="middle">
                <>
                  <EditUser values={values} handleSaveUser={handleSaveUser} />
                </>
                <>
                  <DetailUser values={values} />
                </>
                <>
                  <Delet values={values} handleRemoveUser={handleRemoveUser} />
                </>
              </Space>
            )}
          />
        </ColumnGroup>
      </Table>
    </div>
  );
}

