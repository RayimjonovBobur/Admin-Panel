import React, { useState, useEffect } from "react";
import "./BottomTabs.scss";
import { useSelector, useDispatch } from "react-redux";
import { Tabs } from "antd";
import {
  removeTab,
  setCurrentPage,
  clearPanes,
} from "../../redux/tabs_reducer";
import { useNavigate } from "react-router-dom";
import { findIcon } from "../../assets/icons/icons";
import { ClearOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const BottomTabs = () => {
  const { Panes, currentPage } = useSelector((state) => state?.tabs_reducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = window.location;

  const [panes, setPanes] = useState(Panes);
  const [activeKey, setActiveKey] = useState(panes && panes[0]?.key);

  useEffect(() => {
    setPanes(Panes);
  }, [Panes, pathname]);

  const onChange = (activeKey) => {
    navigate(Panes[activeKey].path);
    setActiveKey(activeKey);
    dispatch(setCurrentPage(Panes[activeKey]));
  };

  const onEdit = (targetKey, action) => {
    if (action === "remove") {
      if (panes?.length === 1) {
        navigate("/servis");
      } else if (panes[+targetKey]?.text === currentPage?.text) {
        if (panes?.length - 1 > targetKey) {
          dispatch(setCurrentPage(panes[+targetKey + 1]));
        } else {
          dispatch(setCurrentPage(panes[+targetKey - 1]));
        }
      }
      dispatch(removeTab(targetKey));
    }
  };

  const clearAll = () => {
    dispatch(clearPanes([]));
    navigate("/asosiy");
  };

  return (
    <>
      {Panes.length > 0 && (
        <div className="bottom__tabs_relative">
          <Tabs
            hideAdd
            activeKey={activeKey}
            type="editable-card"
            onEdit={onEdit}
            className="site-footer__tabs"
          >
            {Panes &&
              Panes?.map((pane, i) => (
                <TabPane
                  tab={
                    <div
                      className="site-footer__tab"
                      onClick={() => onChange(i)}
                    >
                      {findIcon(pane?.icon)}
                      <span>{pane?.text}</span>
                    </div>
                  }
                  key={i}
                />
              ))}
          </Tabs>
          {Panes.length > 1 && (
            <button className="clear__all" onClick={clearAll}>
              <ClearOutlined /> Clear all
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default BottomTabs;
