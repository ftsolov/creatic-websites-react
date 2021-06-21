import "./StyledComponents.css"

const HeadingComponent = (props) => {
  return (
    <div className={"heading-container"}>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  );
};

export default HeadingComponent