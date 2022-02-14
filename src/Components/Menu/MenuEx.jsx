import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Link,Routes, Route,  } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Category from "../Pages/Category";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "../ProductTable/ProductModal";
import Pages from "../Pages/Pages";

const { Header, Sider, Content } = Layout;

const MenuEx = () => {
  const [collapsed, setCollapsed] = useState(false);

  const addCategore = useSelector((state) => state.addCategore);
  const dispatch = useDispatch();
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const localSave = () => {
    localStorage.setItem("categoryes", JSON.stringify(addCategore));
  };
  useEffect(() => {
    localGet();
  }, []);

  const localGet = () => {
    if (localStorage.getItem("categoryes") === null) {
      localStorage.setItem("categoryes", JSON.stringify([]));
    } else {
      let dataLocal = JSON.parse(localStorage.getItem("categoryes"));
      dispatch({ type: "Save-categoryes", payload: dataLocal });
    }
  };
  useEffect(() => {
    localSave();
  }, [addCategore]);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/category">Categores</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/products">Product</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<AppstoreOutlined />}>
            <Link to="/pages">Pages</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 5,
            fontSize: 25,
            color: "#fff",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "10px 10px",
            padding: -20,
            minHeight: 541,
          }}
        >
          <Routes>
            <Route path="/"  element={<Dashboard/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/products" element={<ProductModal/>} />
            <Route path="/pages" element={<Pages/>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MenuEx;
