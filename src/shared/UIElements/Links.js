import React from "react";
import "../../styles/shared/Links.css";

const Links = (props) => {
  return (
    <div className={`links__container ${props.className}`}>
      <div className="link__text" id={props.id}>
        {props.children}
      </div>
    </div>
  );
};

export default Links;
