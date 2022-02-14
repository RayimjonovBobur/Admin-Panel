import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./Cart.css"
import { Button, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";

const { TabPane } = Tabs;

const Page = () => {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages);
  const handleClick = (page) => {
    dispatch({ type: "page", payload: page });
  };
  const { pathname } = window.location;

  const [panes, setPanes] = useState(pages);
  const [activeKey, setActiveKey] = useState(panes && panes[0]?.key);

  const onChange = (activeKey) => {
    setActiveKey(activeKey);
  };

  // onChange = (activeKey) => {
  //   this.setState({ activeKey });
  // };

  // onEdit = (targetKey, action) => {
  //   this[action](targetKey);
  // };

  // add = () => {
  //   const { panes } = this.state;
  //   const activeKey = `newTab${this.newTabIndex++}`;
  //   const newPanes = [...panes];
  //   newPanes.push({
  //     title: "New Tab",
  //     content: "Content of new Tab",
  //     key: activeKey,
  //   });
  //   this.setState({
  //     panes: newPanes,
  //     activeKey,
  //   });
  // };

  // remove = (targetKey) => {
  //   const { panes, activeKey } = this.state;
  //   let newActiveKey = activeKey;
  //   let lastIndex;
  //   panes.forEach((pane, i) => {
  //     if (pane.key === targetKey) {
  //       lastIndex = i - 1;
  //     }
  //   });
  //   const newPanes = panes.filter((pane) => pane.key !== targetKey);
  //   if (newPanes.length && newActiveKey === targetKey) {
  //     if (lastIndex >= 0) {
  //       newActiveKey = newPanes[lastIndex].key;
  //     } else {
  //       newActiveKey = newPanes[0].key;
  //     }
  //   }
  //   this.setState({
  //     panes: newPanes,
  //     activeKey: newActiveKey,
  //   });
  // };
  const onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  useEffect(() => {
    setPanes(pages);
  }, [pages, pathname]);

  return (
    <div>
      <div
        style={{ marginBottom: 16, justifyContent: "center" }}
        className="tabs"
      ></div>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
      >
        {pages.map((pane) => (
          <TabPane tab={pane.text} key={pane.key}>
            {pane.text}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Page;
