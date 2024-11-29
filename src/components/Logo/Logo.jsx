import WaveEffect from "../../animations/WaveEffect"
import "./Logo.css"

const Logo = () => {
  const symbol = "< />"
  
  return (
    <WaveEffect text={symbol} />
  )
}

export default Logo