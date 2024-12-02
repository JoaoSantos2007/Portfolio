import "./Button.css"

const Button = ({text, href = null, target = "_blank", rel="noopener noreferrer", task = () => {}}) => {

  return (
    <a className="button" href={href} target={target} rel={rel} onClick={() => task()}>
      {text}
    </a>
  )
}

export default Button