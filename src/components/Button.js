import '../App.css'

const Button = (props) => {
  return (
    <a href={props.href} style={props.style}>{props.value}</a>
  )
}

export default Button