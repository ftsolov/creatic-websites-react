import "./Header.css";
import Button from "../Button";
import React from "react";

const toggleNavMenu = (e) => {
  if (e.target.id === "burger-icon") {
    console.log("poop");
    e.target.classList.toggle("change");
    if (e.target.classList.contains("change")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  } else {
    e.target.parentElement.classList.toggle("change");
    if (e.target.parentElement.classList.contains("change")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  if (document.getElementById("header-mobile").style.position === "static") {
    document.getElementById("header-mobile").style.position = "fixed";
  } else {
    document.getElementById("header-mobile").style.position = "static";
  }
  document.getElementById("navbar").classList.toggle("navbar-visible");
};

/*Position navbar links*/
// const setHeaderHeight = (headerHeight) => {
//   const el = document.getElementById("navbar");
//   el.style.marginTop = headerHeight + "px";
// };
//
// window.addEventListener("load", function () {
//   const headerHeight = document.getElementById("header-mobile").offsetHeight;
//   setHeaderHeight(headerHeight);
// });

/*--------------------------*/

const HeaderMobile = (props) => {
  return (
    <div className={"header-container"}>
      <div>
        <div className={"header-mobile"} id={"header-mobile"}>
          <div className={"logo"}>
            <img src="logo.svg" alt="Logo" />
          </div>
          <div
            className="container"
            id="burger-icon"
            onClick={(event) => toggleNavMenu(event)}
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </div>
        <div className="navbar" id="navbar">
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
    </div>
  );
};
export default HeaderMobile;
