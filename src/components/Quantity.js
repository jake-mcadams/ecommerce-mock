import { React, useState } from "react";
import "../styles/components/Quantity.css";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";

const Quantity = (props) => {
  const [currentAmount, setCurrentAmount] = useState(0);
  // const [noItems, setNoItems] = useState(true);

  const itemCountHandler = (currentAmount) => {
    return currentAmount;
  };

  const addItemHandler = () => {
    setCurrentAmount((prevState) => prevState + 1);
    // setNoItems(true);
    props.updateMessage(true);
  };

  const minusItemHandler = () => {
    if (currentAmount > 0) {
      setCurrentAmount((prevState) => prevState - 1);
    } else {
      setCurrentAmount(0);
      // setNoItems(false);
      props.updateMessage(false);
    }
  };

  return (
    <div id="quanity__parent_container">
      <div className="quantity__container">
        <div className="quantity__button_container" onClick={minusItemHandler}>
          <img src={minus} alt="" id="quantity__minus" />
        </div>
        <div id="quantity__number">{currentAmount}</div>
        <div className="quantity__button_container" onClick={addItemHandler}>
          <img src={plus} alt="" id="quantity__plus" />
        </div>
      </div>
    </div>
  );
};

export default Quantity;
