import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { Form, Modal, Input, Button } from "antd";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";

const Category = () => {
  const addCategore = useSelector((state) => state.addCategore);
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const [name, setName] = useState(item.name);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const id = addCategore.length + 1;
  // useEffect(() => {
  //   data.map((el) => setItem(el));
  // });
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!name) {
      toast.warning("Please enter something");
    }
    const title = {
      key: id,
      id: id,
      name,
    };
    toast.success("Add Categores");
    setIsModalVisible(false);
    setName("");
    dispatch({ type: "add-category", payload: title });
  };

  return (
    <div>
      <Cart
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        title={"Categoryes"}
      />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        labelCol={{ span: 8 }}
      >
        <Form
          name="basic"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 45 }}
          autoComplete="off"
        >
          <Form.Item>
            <h6>Category:</h6>
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={handleClick}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Category;
