import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button, Card, Table } from "antd";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CartTable = ({
  setIsModalVisible,
  setEdit,
  setEditData,
  setTitle,
  title,
}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Pirce",
      dataIndex: "pirce",
    },
    {
      title: "Images",
      dataIndex: "Image",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: () => (
        <>
          <Button className="mx-2 success">
            <i className="fas fa-edit mx-1"></i> Edit
          </Button>
          <Button type="danger" onClick={handleDelete}>
            <i className="fas fa-trash mx-1"></i> Delete
          </Button>
        </>
      ),
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
  ];
  const store = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [itemEl, setItemEl] = React.useState({});
  const handleDelete = (id) => {
    dispatch({ type: "delete-product", payload: id });
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <Card>
      <Button
        type="primary"
        onClick={() => {
          setTitle(true);
          setIsModalVisible(true);
        }}
      >
        Add Product
      </Button>{" "}
      <Table columns={columns} dataSource={store} onChange={onChange} />
    </Card>
  );
};
export default CartTable;
