import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PagesTabs from "../Cart/PagesTabs";

function Pages() {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages);
  const handleClick = (page) => {
    dispatch({ type: "page", payload: page });
    // console.log(page);
  };
  return (  
    <>
      {pages.map((page) => (
        <Link
          to={page.path}
          onClick={() => handleClick(page)}
          className="btn btn-danger mx-3"
          key={page.key}
        >
          {page.text}
        </Link>
      ))}
      <PagesTabs />
    </>
  );
}

export default Pages;
