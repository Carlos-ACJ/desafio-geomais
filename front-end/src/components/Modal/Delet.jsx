import React from "react";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { WarningOutlined } from "@ant-design/icons";

function Delet({ handleRemoveUser, values }) {
  return (
    <Popconfirm
      icon={<WarningOutlined style={{ color: "red" }} />}
      title="Deletar usuario?"
      onConfirm={() => handleRemoveUser(values)}
      okText="Sim"
      cancelText="Não"
      placement="left"
    >
      <Button type="primary" danger icon={<DeleteOutlined />} />
    </Popconfirm>
  );
}
export default Delet;
