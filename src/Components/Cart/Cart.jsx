import React, { useState } from "react";
import "./Cart.css";
import { Button, Card, Table } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: 1,
  },
];

const Cart = ({ setIsModalVisible, title }) => {
  const dispatch = useDispatch();
  // const [item, setItem] = useState({});
  const [delet, setDelete] = useState("");
  const addCategore = useSelector((state) => state.addCategore);

  const onClick = () => {
    setIsModalVisible(true);
  };

  const Delete = () => {
    dispatch({ type: "delete-category", payload: delet });
    toast.warning("Delete categores");
  };

  return (
    <Card title={title}>
      <Button type="primary" onClick={onClick}>
        Add Category <i className="fas plus fa-folder-plus"></i>
      </Button>
      <Button type="danger" className="mx-2" onClick={Delete}>
        Delete <i className="fas fa-backspace"></i>
      </Button>
      <Table
        rowSelection={{
          type: "radio",
          onChange: (e) => {
            setDelete(e);
          },
        }}
        className="table"
        columns={columns}
        dataSource={addCategore}
        pagination={false}
      />
    </Card>
  );
};

export default Cart;
