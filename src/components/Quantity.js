import React from "react";
import "../styles/components/Quantity.css";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";

const Quantity = (props) => {
  return (
    <div className="quantity__container">
      <div>
        <img src={minus} alt="" id="quantity__minus" />
      </div>
      <div id="quantity__number">3</div>
      <div id="quantity__minus_container">
        <img src={plus} alt="" id="quantity__plus" />
      </div>
    </div>
  );
};

export default Quantity;
