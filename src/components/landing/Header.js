import './Header.css'
import Button from '../Button.js'


const Header = () => {
  return (
    <div className={"header"}>
      <div>
        <img src="" alt="Logo" className={"logo"}/>
      </div>
      <div className={"links"}>
        <a href="#">About us</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <Button value={"Test"} class={"button primary"} href={"#"} />
        <a href="#" className={"button secondary"}>Login</a>
        <a href="#" className={"button primary"}>Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
