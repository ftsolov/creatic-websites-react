import '../App.css'

const Button = (props) => {
  return (
    <a href={props.href} className={"button " + props.class} style={props.style}>{props.value}</a>
  )
}

export default Button;