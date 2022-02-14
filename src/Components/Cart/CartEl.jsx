import { Card } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";

const Cart = ({
  setIsModalVisible,
  setEdit,
  setEditData,
  setTitle,
  data,
  title,
}) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [itemEl, setItemEl] = React.useState({});

  useEffect(() => {
    data.map((el) => setItemEl(el));
  });

  const handleDelete = (id) => {
    dispatch({ type: "delete-product", payload: id });
  };
  return (
    <Card style={{ alignItems: "center", textAlign: "center" }} title={title}>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Pirce</th>
            <th scope="col">Image</th>
            <th scope="col">
              <button
                className="btn btn-primary mx-2 my-2 add"
                onClick={() => {
                  setTitle(true);
                  setIsModalVisible(true);
                }}
              >
                <i className="fas fa-folder-plus"></i> Add
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.id}>
              {itemEl.name ? <td>{item.name}</td> : null}
              {itemEl.price ? <td>${item.price}</td> : null}
              {itemEl.img ? (
                <td>
                  <img src={item.img} className="img" alt="" />
                </td>
              ) : null}
              <div className="d-flex">
                <button
                  className="btn btn-outline-success my-2 mx-2"
                  onClick={() => {
                    setEdit(item);
                    setTitle(false);
                    setEditData(product);
                    setIsModalVisible(true);
                  }}
                >
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button
                  className="btn btn-outline-danger my-2 mx-2"
                  onClick={() => handleDelete(item.id)}
                >
                  <i className="fas fa-trash"></i> Delete
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Cart;
