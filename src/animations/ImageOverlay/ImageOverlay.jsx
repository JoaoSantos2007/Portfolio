import './ImageOverlay.css';

const ImageOverlay = ({ href, src, width="100px", height="100px" }) => {
  return (
    <a 
      href={href}
      className="imageOverlay" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="imageOverlay__container" style={{width:width, height:height}}>
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

export default ImageOverlay;