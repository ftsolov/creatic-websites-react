import "./Header.css";
import React, { useEffect, useState } from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const HeaderComponent = (props) => {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 900;

  return isMobile ? <HeaderMobile handleClick={props.handleClick}/> : <HeaderDesktop handleClick={props.handleClick}/>;
};

export default HeaderComponent;
