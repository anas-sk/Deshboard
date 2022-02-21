import React from "react";
import {
  ArrowDownward,
  ArrowUpward,
  MonetizationOn,
} from "@mui/icons-material/";
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">TODAYS MONEY</span>
        <div className="featuredMoneyContainer">
          <span className="feautredMoney">$24,000</span>
          <span className="feautredMoneyRate">
            <span className="Value Value-inc">+4%</span>
            <ArrowUpward className="featured-icon" />
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">NEW PROJECTS</span>
        <div className="featuredMoneyContainer">
          <span className="feautredMoney">12</span>
          <span className="feautredMoneyRate">
            <span className="Value Value-dic">-10%</span>
            <ArrowDownward className="featured-icon" />
          </span>
        </div>
      </div>
      <div className="featuredItem featuredCustomer">
        <span className="featuredTitle">ROL PER CUSTOMER</span>
        <div className="featuredMoneyContainer">
          <span className="feautredMoney">$25.50 </span>
          <span className="feautredMoneyRate">
            <MonetizationOn className="featured-icon" />
          </span>
        </div>
      </div>
    </div>
  );
}
