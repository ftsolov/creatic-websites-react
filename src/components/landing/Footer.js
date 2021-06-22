import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container w-container">
      <div className="footer">
        <div>
          <p>Creatic Website</p>
          <p>Lenmal GmbH</p>
          <p>Beisengeithe 1b</p>
          <p>59071 Hamm</p>
        </div>
        <div className="footer-heading footer-1">
          <h5>Quick links</h5>
          <a href="#">How it works</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <a href="#">Impressum</a>
        </div>
        <div className="footer-heading footer-2">
          <h5>Privacy Policy</h5>
          {/*<a href="#">App Store</a>*/}
          {/*<a href="#">Google Play</a>*/}
          {/*<a href="#">Careers</a>*/}
        </div>
        <div className="footer-heading footer-3">
          <h5>Social Media</h5>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Linkedin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
