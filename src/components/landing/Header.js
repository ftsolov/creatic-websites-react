import './Header.css'
import Button from '../Button.js'


const Header = () => {
  return (
    <div className={"header"}>
      <div>
        <img src="logo.svg" alt="Logo" className={"logo"}/>
      </div>
      <div className={"links"}>
        <a href="#">About us</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <Button value={"Login"} class={"secondary"} style={{marginRight: 1 + 'rem'}} href={"#"} />
        <Button value={"Sign Up"} class={"primary"} href={"#"} />
      </div>
    </div>
  );
};

export default Header;
