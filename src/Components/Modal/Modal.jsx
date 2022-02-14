import React from "react";
import "antd/dist/antd.css";
import { Modal } from "antd";
import Form from "./Form";

const ModalEl = ({
  isModalVisible,
  setIsModalVisible,
  edit,
  editData,
  istitle,
}) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form edit={edit} editData={editData} istitle={istitle} />
      </Modal>
    </div>
  );
};

export default ModalEl;
