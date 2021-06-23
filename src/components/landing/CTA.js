import Button from "../Button";
import './CTA.css'

const CTA = () => {
  return (
    <div className={"cta"}>
      <div className={"left-cta"}>
        <h1>What are you waiting for?</h1>
        <p>
          Start building the website of your dreams right away and check out all
          of the features that we offer.
        </p>
        <Button value={"Get started ->"} class={"primary"} />
      </div>
      <div className={"right-cta"}>
      </div>
      <img src="3d-shapes.png" alt="3D Shapes" className={"shapes"}/>
    </div>
  );
};

export default CTA;