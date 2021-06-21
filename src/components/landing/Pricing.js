import "./Pricing.css";
import HeadingComponent from "../HeadingComponent";

const Pricing = () => {
  return (
    <div>
      <HeadingComponent title={"Pricing"} description={"Which price plan fits you best?"} />
      <div>
        <div className="pricing-card">
          <div className="pricing-title">
            <h2></h2>
            <h3></h3>
          </div>
          <hr />
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="pricing-card">
          <div className="pricing-title">
            <h2></h2>
            <h3></h3>
          </div>
        </div>
        <div className="pricing-card">
          <div className="pricing-title">
            <h2></h2>
            <h3></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
