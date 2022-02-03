import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
} from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import MaskedInput from "antd-mask-input";

export default function AddUser({ handleSaveUser }) {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleOk = () => {
    form.submit();
  };

  const onFinish = (val) => {
    handleSaveUser(val);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ background: "#3FC95D", borderColor: "#36B652" }}
        icon={<UserAddOutlined />}
      >
        Cadastrar
      </Button>
      <Modal
        title="Nova Usuario"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button onClick={handleOk} type="primary">
            Salvar
          </Button>,
        ]}
      >
        <div>
          <Form form={form} onFinish={onFinish}>
            <Form.Item label="Nome" name="nome">
              <Input />
            </Form.Item>
            <Form.Item label="Genero" name="sexo">
              <Select>
                <Select.Option value="masculino">Masculino</Select.Option>
                <Select.Option value="feminino">Feminino</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="DatePicker" name="data_nasc">
              <DatePicker
                mode="date"
                format="DD-MM-YYYY"
              />
            </Form.Item>
            <Form.Item label="CPF" name="cpf">
              <MaskedInput mask="111.111.111-11" size="11" />
            </Form.Item>
            <Form.Item label="RG" name="rg">
              <MaskedInput mask="11.111.111-1" size="9" />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
}
