import "./Card.css"
import { ReactComponent as FolderIcon } from "../../assets/images/folder.svg"
import { ReactComponent as ExternalIcon } from "../../assets/images/external.svg"

const Card = ({project}) => {
  return (
    <li className="card">
      <div className="card__inner">
        <header>
          <div className="card__top">
            <div className="folder">
              <FolderIcon />
            </div>
            <div className="card__links">
              <a href={project.externalLink} aria-label="External Link" className="external" target="_blank" rel="noopener noreferrer">
              <ExternalIcon className="card__externalLink"/>
              </a>
            </div>
          </div>
      
          <h3 className="card__title">
            <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </h3>
      
          <div className="card__description">
            <p>{project.description}</p>
          </div>
        </header>
    
        <footer>
          <ul className="card__techList">
            {project.techList.map(tech => (
              <li>{tech}</li>
            ))}
          </ul>
        </footer>
      </div>
    </li>
  )
}

export default Card