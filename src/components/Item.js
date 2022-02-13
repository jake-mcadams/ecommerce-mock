import { React, useState } from "react";
import ProductPreview from "../shared/UIElements/ProductPreview";
import "../styles/components/Item.css";
import Quantity from "./Quantity";
import AddCart from "./AddCart";

const Item = (props) => {
  const [noItems, setNoItems] = useState(true);

  const showmMessageHandler=(value)=>{
    setNoItems(value)
  }

  let discountPercentage =
    (props.products.discountPrice / props.products.originalPrice) * 100;

  let companyNameUpper = props.products.companyTitle.toUpperCase;

  return (
    <div className="item__container">
      <div id="item__company_name">
        <span id="companyName">
          {props.products.companyTitle.toUpperCase()}
        </span>
      </div>
      <div id="item__productTitle">
        <h1 id="item__Title">{props.products.productTitle}</h1>
      </div>
      <div id="item__product_description">{props.products.productDesc}</div>
      <div id="item__product_pricing">
        <div id="item__discount_price_container">
          <div id="item__discount_price">${props.products.discountPrice}</div>
          <div id="item__discount_percent">{discountPercentage}%</div>
        </div>
        <div id="item__full_price">
          <span>${props.products.originalPrice}</span>
        </div>
      </div>
      <div id="item__cart">
        <Quantity updateMessage={showmMessageHandler}/>
        <AddCart />
      </div>
      {!noItems && (
          <div id="quantity__message">There are no more items to remove</div>
        )}
    </div>
  );
};

export default Item;
