import "./ImageOverlay.css";
import PropTypes from "prop-types";

const ImageOverlay = ({ href, src }) => {
  return (
    <a
      href={href}
      className="imageOverlay"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="imageOverlay__container">
        <img
          src={src}
          alt="Imagem com efeito"
          className="imageOverlay__image"
        />
        <div className="imageOverlay__overlay"></div>
      </div>
    </a>
  );
};

ImageOverlay.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImageOverlay;
