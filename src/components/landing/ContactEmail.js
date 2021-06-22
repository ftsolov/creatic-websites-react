import React from "react";
import "../StyledComponents.css";

class ContactEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "contact@creaticwebsites.com",
      color: "var(--white)",
    };
  }

  handleHover = () => {
    this.setState({ color: "var(--light-grey)", text: "Click to copy email!" });
  };

  handleHoverLeave = () => {
    this.setState({
      color: "var(--white)",
      text: "contact@creaticwebsites.com",
    });
  };

  handleClick = () => {
    this.setState({
      color: "var(--light-grey)",
      text: "Email copied to clipboard!",
    });
    navigator.clipboard.writeText("contact@creaticwebsites.com");
  };

  render() {
    return (
      <div
        className={"email"}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHoverLeave}
        onMouseDown={this.handleClick}
      >
        <h2 style={{ color: this.state.color }}>{this.state.text}</h2>
        <h2>@</h2>
      </div>
    );
  }
}

export default ContactEmail;
