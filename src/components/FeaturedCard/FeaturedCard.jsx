import "./FeaturedCard.css"
import { ReactComponent as GitHubIcon } from "../../assets/images/github.svg";
import { ReactComponent as ExternalIcon } from "../../assets/images/external.svg";
import ImageOverlay from "../../animations/ImageOverlay/ImageOverlay";

const FeaturedCard = ({ project, index }) => {
  return (
    <li className="featuredCard">
      <div className="featuredCard__content">
        <div>
          <p className="featuredCard__overline">Featured Project</p>
          <h3 className="featuredCard__title">
            <a href={project.externalLink} rel="noopener noreferrer" target="_blank">{project.name}</a>
          </h3>
        </div>

        <div className="featuredCard__description">
          <p>{project.description}</p>
        </div>

        <ul className="featuredCard__techList">
          {project.techList.map((tech, techIndex) => (
            <li key={`featured-${index}-tech-${techIndex}`}>{tech}</li>
          ))}
        </ul>

        <div className="featuredCard__links">
          <a href={project.github} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
            <GitHubIcon />
          </a>
          <a href={project.externalLink} aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
            <ExternalIcon />
          </a>
        </div>
      </div>

      <div className="featuredCard__image">
        <ImageOverlay href={project.externalLink} src={project.img} width="580px" height="360px"/>
      </div>
    </li>
  )
}

export default FeaturedCard