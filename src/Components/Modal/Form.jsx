import { Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Form = ({ setVisible, title, deletId, add }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [select, setSelect] = useState("");

  const [storeData, setStoreData] = useState([]);
  const product = useSelector((state) => state.data);
  const addCategore = useSelector((state) => state.addCategore);
  const store = useSelector((state) => state.Item);
  const dispatch = useDispatch();
  const id = product.length + 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      toast.warning("Please enter something");
    }

    const data = {
      key: id,
      id: id,
      name,
      price,
      image: <img className="img" src={image}></img>,
      select,
    };

    const dataItem = {
      key: deletId,
      id: deletId,
      name,
      price,
      image: <img className="img" src={image}></img>,
      select,
    };
    setVisible(false);
    if (title) {
      dispatch({ type: "add-product", payload: data });
      toast.success("Added product");
    } else {
      storeData.splice(dataItem.id - 1, 1, dataItem);
      dispatch({
        type: "edit_products",
        payload: storeData,
      });
      setName("");
      setPrice("");
      setImage("");
      toast.success("Edit product");
    }
    setName("");
    setPrice("");
    setImage("");
  };

  const ediData = () => {
    const id = deletId[0];
    const [newData] = product.filter((item) => item.key === id);
    setStoreData([...product]);
    if (newData) {
      setName(newData.name);
      setPrice(newData.price);
      setImage(newData.image);
    }
  };

  useEffect(() => {
    if (add) {
      ediData();
    }
  }, [deletId]);

  // image
  const handleChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Form className="from">
        <div className="row">
          <div className="col-lg-6">
            <label className="form-label">Name</label>
            <Input
              type="text"
              name="name"
              className="form-control "
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="name"
            />
          </div>
          <div className="col-lg-6">
            <label className="form-label">Categorys</label>
            <Select name="category" required className="form-select">
              {addCategore.map((el) => (
                <Option value={el.id} key={el.id}>
                  {el.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="col-lg-6 mt-3">
            <label className="form-label">Pirce</label>
            <Input
              type="number"
              name="price"
              className="form-control "
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="price"
            />
          </div>
          <div className="col-lg-6 mt-5">
            <div className="file-input">
              <input
                type="file"
                name={image}
                id="file-input"
                className="file-input__input"
                onChange={handleChange}
                placeholder="img"
                required
              />
              <label className="file-input__label" htmlFor="file-input">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="upload"
                  className="svg-inline--fa fa-upload fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path>
                </svg>
                <span>Upload file</span>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <button
              className="btn btn-danger mx-2 my-4 w-100"
              onClick={handleCancel}
            >
              Close
            </button>
          </div>
          <div className="col-lg-6 ">
            <button
              type="submit"
              className="btn my-2 mx-2 mt-4 btn-success w-100"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Form;
