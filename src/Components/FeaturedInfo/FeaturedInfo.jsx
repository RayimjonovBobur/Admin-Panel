import React from "react";
import "./FeaturedInfo.css";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyCountainer">
          <span className="featuredMoney">$2.415</span>
          <span className="featuredMoneyRate">
            -11.4 <i className="fas fa-arrow-down featuredIcon negative"></i>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>{" "}
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyCountainer">
          <span className="featuredMoney">$4.415</span>
          <span className="featuredMoneyRate">
            -1.4 <i className="fas fa-arrow-down featuredIcon negative"></i>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>{" "}
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyCountainer">
          <span className="featuredMoney">$2.415</span>
          <span className="featuredMoneyRate">
            +2.4 <i className="fas fa-arrow-up featuredIcon"></i>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
