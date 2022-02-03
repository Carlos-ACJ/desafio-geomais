import React, { useState } from "react";
import { Modal, Button } from "antd";

export default function DetailUser({ values }) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  var dateFormat = "D-M-YYYY";
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Detalhes
      </Button>
      <Modal
        title="Detalhes"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <li>Nome: {values.nome}</li>
          <li>CPF: {values.cpf}</li>
          <li>RG: {values.rg}</li>
          <li>Data de Nascimento: {values.data_nasc.format(dateFormat)}</li>
          <li>Genero: {values.sexo}</li>
        </div>
      </Modal>
    </>
  );
}
