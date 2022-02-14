import React from "react";
import {  Table } from "antd";
import Column from "antd/lib/table/Column";
import { useSelector } from "react-redux";

function Product({ setTitle, setDeletId, setAdd }) {
  const store = useSelector((state) => state.data);

  return (
    <>
      <Table
        rowSelection={{
          type: "radio",
          onChange: (e) => {
            setDeletId(e);
            setTitle(false);
            setAdd(true)
          },
        }}
        className="table"
        dataSource={store}
      >
        <Column title="#" dataIndex="id" />
        <Column title="Name" dataIndex="name" />
        <Column title="Price" dataIndex="price" />
        <Column title="Categores" dataIndex="select" />
        <Column title="Image" dataIndex="image" />
      </Table>
    </>
  );
}

export default Product;


 