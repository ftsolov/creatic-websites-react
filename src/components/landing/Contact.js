import "./Contact.css";
import HeadingComponent from "../HeadingComponent";
import ContactEmail from "./ContactEmail";

const Contact = () => {
  return (
    <div className={"contact"} id={"contact"}>
      <HeadingComponent title={"Got a question?"} description={"Get in touch with us."} />
      <ContactEmail />
    </div>
  )
}

export default Contact