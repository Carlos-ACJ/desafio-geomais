import React, { useState } from "react";
import MaskedInput from "antd-mask-input";
import { Modal, Button, Form, Input, Select, DatePicker } from "antd";

export default function EditUser({ values, handleSaveUser }) {
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
    handleSaveUser({ ...val, id: values.id });
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Editar
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Salvar
          </Button>,
        ]}
      >
        <div>
          <Form initialValues={values} form={form} onFinish={onFinish}>
            <Form.Item
              label="Nome"
              name="nome"
              rules={[{ required: true, message: "Nome obrigatório!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Genero" name="sexo">
              <Select>
                <Select.Option value="Masculino">Masculino</Select.Option>
                <Select.Option value="Feminino">Feminino</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="DatePicker" name="data_nasc">
              <DatePicker format="DD-MM-YYYY" />
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
