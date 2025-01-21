import "./Button.css";
import PropTypes from "prop-types";

const Button = ({
  text,
  href = null,
  target = "_blank",
  rel = "noopener noreferrer",
  task = () => {},
}) => {
  return (
    <a
      className="button"
      href={href}
      target={target}
      rel={rel}
      onClick={() => task()}
    >
      {text}
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  task: PropTypes.func,
};

export default Button;
