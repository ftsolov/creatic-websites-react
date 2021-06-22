import "./Pricing.css";
import HeadingComponent from "../HeadingComponent";

const Pricing = () => {
  return (
    <div id={"pricing"}>
      <HeadingComponent title={"Pricing"} description={"Which price plan fits you best?"} />
      <div className={"pricing-card-container"}>
        <div className="pricing-card card-one">
          <div className="pricing-title">
            <h2>Basic</h2>
            <h3><span className={"price-highlight"}>99€</span> pro Monat </h3>
          </div>
          <hr className={"hr-styled"} />
          <ul>
            <li>1 Seite (+ Pflichtangaben EU)</li>
            <li>Bis zu 2 GB Inhalte</li>
            <li>Website in 10 days</li>
            <li>1 Domain</li>
          </ul>
        </div>
        <div className="pricing-card card-two">
          <div className="pricing-title">
            <h2>Pro</h2>
            <h3><span className={"price-highlight"}>149€</span> pro Monat</h3>
          </div>
          <hr className={"hr-styled"} />
          <ul>
            <li>3 Domains</li>
            <li>5 E-Mail Adressen</li>
            <li>Bis zu 3 Seiten(+ Pflichtangaben EU)</li>
            <li>Bis zu 8 GB Inhalte</li>
            <li>1 monatliches Review</li>
            <li>DSGVO-Beratung</li>
            <li>Website in 3 Tagen</li>
          </ul>
        </div>
        <div className="pricing-card card-three">
          <div className="pricing-title">
            <h2>Enterprise</h2>
            <h3><span className={"price-highlight"}>229€</span> pro monat</h3>
          </div>
          <hr className={"hr-styled"} />
          <ul>
            <li>5 Domains</li>
            <li>10 E-Mail Adressen</li>
            <li>25GB+ Inhalte</li>
            <li>Website in 7 days</li>
            <li>Hotline Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
