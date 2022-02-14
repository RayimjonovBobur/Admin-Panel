import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../Cart/CartEl";
import ModalEl from "../Modal/Modal";
import CartTable from "../Cart/CartTable";

function Products() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [edit, setEdit] = useState("");
  const [editData, setEditData] = useState("");
  const [istitle, setTitle] = useState(false);
  return (
    <div>
      <Cart
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        setEdit={setEdit}
        setEditData={setEditData}
        title="Products"
        setTitle={setTitle}
      />
      <CartTable
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        setEdit={setEdit}
        setEditData={setEditData}
        title="Products"
        setTitle={setTitle}
      />
      {isModalVisible ? (
        <ModalEl
          istitle={istitle}
          edit={edit}
          editData={editData}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />
      ) : null}
    </div>
  );
}

export default Products;
