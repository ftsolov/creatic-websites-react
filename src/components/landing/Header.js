import "./Header.css";
import Button from "../Button.js";

const Header = () => {
  return (
    <div className={"header"}>
      <div className={"logo"}>
        <img src="logo.svg" alt="Logo" />
      </div>
      <div className={"links"}>
        <a href="#">About us</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <Button value={"Login"} class={"secondary mr"} href={"#"} />
        <Button value={"Sign Up"} class={"primary"} href={"#"} />
      </div>
    </div>
  );
};

export default Header;
