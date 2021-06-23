import '../App.css'

const Button = (props) => {

  // const [modalVisible, setModalVisible] = useState(false);
  // console.log(props.class.includes("primary"))
  //
  // if (props.class.includes("primary")) {
  //   return (
  //     <a onClick={setModalVisible('true')} href={props.href} className={"button " + props.class} style={props.style}>{props.value}</a>
  //   )
  // }

  return (
    <a onClick={props.onClick} href={props.href} className={"button " + props.class} style={props.style}>{props.value}</a>
  )
}

export default Button;