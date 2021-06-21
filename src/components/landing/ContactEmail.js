import React from "react";
import "../StyledComponents.css";

class ContactEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "contact@creaticwebsites.com",
    };
  }

  handleHover = () => {
    this.setState({ text: "Click to copy email!" });
  };

  handleHoverLeave = () => {
    this.setState({ text: "contact@creaticwebsites.com" });
  };

  handleClick = () => {
    this.setState({ text: "Email copied to clipboard!" });
    navigator.clipboard.writeText("contact@creaticwebsites.com");
  };

  render() {
    return (
      <div className={"email"}>
        <h2
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHoverLeave}
          onMouseDown={this.handleClick}
        >
          {this.state.text}
        </h2>
        <h2>@</h2>
      </div>
    );
  }
}

export default ContactEmail;
