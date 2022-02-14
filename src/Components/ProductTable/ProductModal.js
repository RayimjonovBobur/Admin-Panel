import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Product from "../ProductTable/Product";
import Form from "../Modal/Form";
import FormItem from "../Modal/FormItem";

const ProductModal = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState(false);
  const [title, setTitle] = useState(false);
  const [add, setAdd] = useState(false);
  const [deletId, setDeletId] = useState();
  const dispatch = useDispatch();

  const showModal = () => {
    setVisible(true);
    setTitle(true);
    setText(true);
  };

  const editModal = () => {
    setVisible(true);
    setText(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        dispatch({ type: "delete-product", payload: deletId });
        toast.warning("Delete product");
      },
    });
  };

  return (
    <>
      <Button type="primary" className="mx-2" onClick={showModal}>
        <i className="bi bi-send-plus-fill me-2"></i>Add
      </Button>
      <Button className="success mx-2 " onClick={editModal}>
        <i className="bi bi-pencil-square me-2"></i> Edit
      </Button>
      <Button className="mx-2" type="danger" onClick={handleDelete}>
        <i className="bi bi-trash"></i> Delete
      </Button>
      <Modal
        title={text ? "Add Modal" : "Edit Modal"}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer=""
      >
        <FormItem
          add={add}
          title={title}
          setVisible={setVisible}
          deletId={deletId}
        />
      </Modal>

      <Product setDeletId={setDeletId} setTitle={setTitle} setAdd={setAdd} />
    </>
  );
};

export default ProductModal;
