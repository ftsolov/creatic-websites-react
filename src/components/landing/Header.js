import "./Header.css";
import Button from "../Button.js";

const toggleBurgerMenu = (x) => {
  if (x.classList.contains("change")) {
    x.classList.toggle("change");
    document.getElementById("links").style.display = "none";
  } else {
    x.classList.toggle("change");
    document.getElementById("links").style.display = "flex";
  }
}

const Header = () => {
  return (
    <div className={"header"}>
      <div className={"logo"}>
        <img src="logo.svg" alt="Logo" />
      </div>
      <div className={"links"}>
        <a href="#steps">How it works</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={"buttons"}>
        <Button value={"Login"} class={"secondary mr"} href={"#"} />
        <Button value={"Sign Up"} class={"primary"} href={"#"} />
      </div>
      <div className="container" id="burger-icon" onClick="toggleBurgerMenu(this)">
        <div className="bar1"/>
        <div className="bar2"/>
        <div className="bar3"/>
      </div>
    </div>
  );
};

export default Header;
