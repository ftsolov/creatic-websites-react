import Button from '../Button.js'
import './Hero.css'

const Hero = (props) => {
  return (
    <div className={"hero"}>
      <div className={"hero-left"}>
        <h1>Wir entwickeln Website
          mit <span style={{color: "var(--green)"}}>style, klipp & klar!</span></h1>
        <h3>Deine Seite, Dein Style, Dein Preis.</h3>
        <div className={"hero-buttons"}>
          <Button value={"Get started ->"} class={"primary mr"} onClick={props.handleClick} />
          <Button value={"How it works"} class={"secondary"} href={"#steps"}/>
        </div>
      </div>
      <div className={"hero-right"}>
        <img src="hero-illustration.svg" alt="Illustration" />
      </div>
    </div>
  );
};

export default Hero;