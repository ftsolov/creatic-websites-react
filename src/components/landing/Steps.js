import Button from "../Button.js";
import './Steps.css'

const Steps = (props) => {
  return (
    <div className={"steps-section"} id={"steps"}>
      <h1>How does it <span style={{color: "var(--green)"}}>work?</span></h1>
      <div className={"steps"}>
        <div className="step">
          <h2>Select what you want.</h2>
          <p>Pick the features you want on your website: make it perfectly tailored for your needs.</p>
        </div>
        <div className="step">
          <h2>Pick a price plan.</h2>
          <p>Pick a price plan that suits your needs, we got the rest covered.</p>
        </div>
        <div className="step">
          <h2>Sit back and enjoy.</h2>
          <p>Give us a few days to create your website, and when we are ready it will be in your mailbox.</p>
        </div>
      </div>
      <Button value={"Build your website ->"} class={"primary"} onClick={props.handleClick}/>
    </div>
  );
};

export default Steps
