import React from "react";
import Links from "../shared/UIElements/Links";
import "../styles/components/Navigation.css";
import logo from "../images/logo.svg";
import Cart from "../shared/Cart";
import Avatar from "../shared/Avatar";

const Navigation = () => {
  return (
    <div className="navigation__container">
      <div className="navigation__logo_links">
        <div className="navigation__image">
          <img src={logo} alt="" />
        </div>
        <div className="navigation__links-container">
          <Links id="collections" className="links__collections">
            Collections
          </Links>
          <Links id="men" className="links__men">
            Men
          </Links>
          <Links id="women" className="links__women">
            Women
          </Links>
          <Links id="about" className="links__about">
            About
          </Links>
          <Links id="contact" className="links__contact">
            Contact
          </Links>
        </div>
      </div>
      <div id="navigation__cart_avatar">
        <Cart />
        <Avatar />
      </div>
    </div>
  );
};

export default Navigation;
