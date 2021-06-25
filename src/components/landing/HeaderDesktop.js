import "./Header.css";
import Button from "../Button";
import React from "react";

const HeaderDesktop = (props) => {
  return (
    <div className={"header margin"}>
      <div className={"logo"}>
        <img src="logo.svg" alt="Logo" />
      </div>
      <div className={"links"}>
        <a href="#steps">How it works</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={"buttons"}>
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
  )
}

export default HeaderDesktop