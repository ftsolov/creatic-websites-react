import "./Header.css";
import Button from "../Button";
import React from "react";

const toggleBurgerMenu = (e) => {
  console.log(e);
  if (e.classList.contains("change")) {
    e.classList.toggle("change");
    document.getElementById("links").style.display = "none";
  } else {
    e.classList.toggle("change");
    document.getElementById("links").style.display = "flex";
  }
};

const HeaderMobile = (props) => {
  return (
    <div>
      <div className={"header-mobile"}>
        <div className={"logo"}>
          <img src="logo.svg" alt="Logo" />
        </div>
        <div
          className="container"
          id="burger-icon"
          onClick={() => toggleBurgerMenu(this)}
        >
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
      </div>
      <div className="navbar">
        <div className={"links-mobile"}>
          <a href="#steps">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={"buttons-mobile"}>
          <Button
            value={"Login"}
            class={"secondary mr"}
            href={"#"}
            onClick={props.handleClick}
          />
          <Button
            value={"Sign Up"}
            class={"primary"}
            href={"#"}
            onClick={props.handleClick}
          />
        </div>
      </div>
    </div>
  );
};
export default HeaderMobile;
